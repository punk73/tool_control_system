Ext.define('tool_control_system.view.tool.ToolController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tool-tool',

    onSearch(component, e){

    	if (e.keyCode == 13) {
	    	store = this.getViewModel().getStore('tools');
	    	self = this;
	    	param = this.getElementValue()

            store.load({
                params: param,
                callback: function(records,operation,success){
                   console.log({
                   	records, operation, success
                   })
            	}
            })
    	}
    },

    getElement(){
    	return {
    		no : Ext.ComponentQuery.query('textfield[name=search_by_tool_no_tool_list]')[0], 
    		name: Ext.ComponentQuery.query('textfield[name=search_by_tool_name_tool_list]')[0],
    	}
    },

    getElementValue(){
    	datas = this.getElement()
    	result ={};
    	for (index in datas){
    		if (datas[index].value !== '') {
    			result[index] = datas[index].value
    		} 
    	}

    	return result;
    },

    onDownload (){
        console.log('onDownload')
        self = this;
        token = '?token='+ tool_control_system.util.Config.getToken();
        url = 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/tools/download' + token

        window.location = url
    },

});
