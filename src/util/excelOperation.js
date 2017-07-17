		/*
		 * EVA
		 * EXCELS表相关操作
		 */
		import XLSX from 'xlsx'
		import filesaver from 'file-saver'
		
		class ExcelOperation{
			
			constructor(){
				
			}
			test(){
				var People = [
					{name:"XX",1:'X',2:'V',3:'X',4:'X',5:'O',6:"X"}
				]
				var weeks = ['日','一','二','三','四','五','六','休','课'];
				var year = 2017;
	    		var month = 1;
				var sheetW = 6;
				var sheetRange = String.fromCharCode(((sheetW % 26) == 0 ? 26 : (sheetW % 26)) + 64);
				var head = ['name'];
				for(var i = 0;i<sheetW;i++){
					head.push(i+1);
				}
				var _head = head
							.map((v,i) => Object.assign({},{v:v,position:String.fromCharCode(65+i) + 2 }))
							.reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v=='name'?'姓名':next.v}}), {});
							
				var _dayData = head
							.map((item,i) => Object.assign({},{v:item,position:String.fromCharCode(i+65) + 3}))//+3 第二行
							.reduce((p,n) => Object.assign({},p,{[n.position]:{v:weeks[new Date(year,month,(n.v+1)).getDay()]}}),{});
							
				var _data = People
							.map((v, i) => head.map((k, j) => Object
							.assign({}, { v: v[k], position: String.fromCharCode(65+j) + (i+4) })))
				   			.reduce((prev, next) => prev.concat(next))
				   			.reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v}}), {});
				

				var outPut = Object.assign({},_head,_dayData,_data);
				var outputPos = Object.keys(outPut);
				var ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];

				var wb = {
				    SheetNames: ['mySheet'],
				    Sheets: {
				        'mySheet': Object.assign({},outPut, { '!ref': ref },{
				        	"!merges":[
				        		{s:{r:0,c:0},e:{r:0,c:head.length-1}},
				        		{s:{r:1,c:0},e:{r:2,c:0}}
				        	]
				        })
				    }
				};
				var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
				var wbout = XLSX.write(wb,wopts);
				function s2ab(s) {
				  var buf = new ArrayBuffer(s.length);
				  var view = new Uint8Array(buf);
				  for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
				  return buf;
				}
				filesaver.saveAs(new Blob([s2ab(wbout)],{type:""}), "test.xlsx")
			}
			importE(){
				var dayData=[];
				var monthData = '2012-02';
				var year = monthData.split('-')[0];
	    		var month = monthData.split('-')[1];
	    		var maxDay = new Date(year,month,0).getDate();
	    		var weeks = ['日','一','二','三','四','五','六','休','课'];
	    		dayData = [];
	    		for(let i = 0;i<maxDay;i++){
	    			var item = {};
	    			var id = new Date(year,month,(i+1)).getDay();
	    			if(id == 0 || id == 6){
	    				id = 7;
	    			}
	    			item.date = (i+1);
	    			item.day = weeks[id];
	    			dayData.push(item);
	    		}
	    		
				var sheetW = maxDay + 2;
				var sheetRange = String.fromCharCode(((sheetW % 26) == 0 ? 26 : (sheetW % 26)) + 64);
				var range = 'A'+sheetRange+'2'
				var title = ['姓名']

//				return;
				
				
				var _headers = ['id', 'name', 'age', 'country', 'remark'];
				var _data = [ { id: '1',
				                name: 'test1',
				                age: '30',
				                country: 'China',
				                remark: 'hello' },
				              { id: '2',
				                name: 'test2',
				                age: '20',
				                country: 'America',
				                remark: 'world' },
				              { id: '3',
				                name: 'test3',
				                age: '18',
				                country: 'Unkonw',
				                remark: '???' } ];	
				var headers = _headers
							.map((v,i) => Object.assign({},{v:v,position:String.fromCharCode(65+i) + 2 }))
							.reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v}}), {});
					
				var data = _data
				   			.map((v, i) => _headers.map((k, j) => Object.assign({}, { v: v[k], position: String.fromCharCode(65+j) + (i+3) })))
				   			.reduce((prev, next) => prev.concat(next))
				   			.reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v}}), {});
				console.log(headers);
				// 合并 headers 和 data
//				var output = Object.assign({'A1':{v:'标题'}}, headers, data);
				var output = Object.assign({'A1':{v:'标题'}}, headers);
				// 获取所有单元格的位置
				var outputPos = Object.keys(output);
				// 计算出范围
				var ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
				// 构建 workbook 对象
				var wb = {
				    SheetNames: ['mySheet'],
				    Sheets: {
				        'mySheet': Object.assign({},output, { '!ref': ref },{
				        	"!merges":[
				        		{s:{r:0,c:0},e:{r:0,c:_headers.length-1}}
				        	]
				        })
				    }
				};
//				
				// 导出  后端用writeFile
//				XLSX.writeFile(wb, 'output.xlsx');

				var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };

				var wbout = XLSX.write(wb,wopts);
				
				function s2ab(s) {
				  var buf = new ArrayBuffer(s.length);
				  var view = new Uint8Array(buf);
				  for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
				  return buf;
				}
				filesaver.saveAs(new Blob([s2ab(wbout)],{type:""}), "test.xlsx")
				
			}
			exportE(){
				console.log(XLSX);
			}
		}
		export default ExcelOperation;
		