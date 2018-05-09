
Ext.define('tool_control_system.view.users.Form',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tool_control_system.view.users.FormController',
        'tool_control_system.view.users.FormModel'
    ],

    xtype : 'users_form',

    controller: 'users-form',

    viewModel: {
        type: 'users-form'
    },

    height : 600,

    layout: {
        type:'border'
    },

    title: 'Users',

    items :[
    {
        xtype: 'form',
        reference: 'form',
        margin : '10',
        bodyPadding: 10,

        title: 'Changes Password',
        
        defaults: {
            anchor: '100%',
            labelWidth: 100
        },

        frame: true,

        resizable: true,

        collapsible: true,
        split: {
            size: 10
        },
        region  : 'center',

        items: [
        {
            xtype: 'textfield',
            name: 'email_users_form',
            fieldLabel: 'Email',
            emptyText : 'Type Email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password_users_form',
            inputType: 'password',
            emptyText : 'Type Password',
            fieldLabel: 'Old Password',
            enableKeyEvents: true,
            listeners: {
                // keyup: 'onEnter'
            },
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'new_password1',
            inputType: 'password',
            emptyText : 'Type New Password',
            fieldLabel: 'New Password',
            enableKeyEvents: true,
            listeners: {
                // keyup: 'onEnter'
            },
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'new_password2',
            inputType: 'password',
            emptyText : 'Re-Enter New Password',
            fieldLabel: 'Re-enter New Password',
            enableKeyEvents: true,
            listeners: {
                // keyup: 'onEnter'
            },
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: '<b>*After succesfully changes password, you need to login with new password</b>'
        }
        ],
        buttons: [{
            text: 'Submit',
            // formBind: true,
            listeners: {
                click: 'onSubmit'
            }
        }]  
    }]
});
