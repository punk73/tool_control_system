Ext.define('tool_control_system.view.users.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users-form',

    onSubmit : function (){
    	components = this.getElementValue();

    	console.log(components)
    	if (components.password == components.password_confirmation ) {
    		
    		components.token = tool_control_system.util.Config.getToken();
    		self = this;
    		Ext.Ajax.request({
	            url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/auth/changes',
	            method: 'POST',
	            params: components,
	            headers: {
			        'Authorization': 'Bearer '+  components.token
			    },
	            success: function (response, opts){
	                Ext.Msg.alert('Success', "Password is changed! login with your new password!!" );
	                self.fireEvent('logout'); //trigger event from main controller
	                location.reload();
	            },
	            failure: function(response, opts) {

	                console.log({response, opts})
		            error = JSON.parse( response.responseText);
		            console.log(error)
		            Ext.Msg.alert('Error', error.error.message );
	            }
	        })

    	}else{
    		Ext.Msg.alert('Error', 'New Password Not Match!');
    	}
    },

    getElement : function (){
    	return {
    		email: Ext.ComponentQuery.query('textfield[name=email_users_form]')[0],
    		old_password: Ext.ComponentQuery.query('textfield[name=password_users_form]')[0],
    		password: Ext.ComponentQuery.query('textfield[name=new_password1]')[0],
    		password_confirmation: Ext.ComponentQuery.query('textfield[name=new_password2]')[0],
    	}
    },

    getElementValue : function (){
    	components =  this.getElement();
    	return {
    		email : components.email.value,
    		old_password : components.old_password.value,
    		password : components.password.value,
    		password_confirmation : components.password_confirmation.value,

    	}
    }

});
