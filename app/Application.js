/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('tool_control_system.Application', {
    extend: 'Ext.app.Application',

    name: 'tool_control_system',

    quickTips: false,
    
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
        
    ],

    requires:[
        'tool_control_system.view.login.Login'
    ],

    launch: function () {
        // TODO - Launch the application
         // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        /*var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("isLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });*/

        self = this;
        token = tool_control_system.util.Config.getToken();

        Ext.Ajax.request({
            url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/auth/me',
            method: 'GET',
            params: {
                token : token
            },
            success: function (response, opts){
                // console.log({response, opts})
                res = JSON.parse(response.responseText);
                level = res.access_level;

                //set user, for get the specific supplier id
                localStorage.setItem('user', response.responseText );

                // console.log(level) 
                Ext.create({
                    xtype: 'app-main',

                    access_level : level
                });
            },
            failure: function(response, opts) {
                // console.log({response, opts})
                
                Ext.create({
                    xtype: 'login'
                });
            }
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
