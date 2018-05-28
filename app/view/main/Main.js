/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tool_control_system.view.main.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'tool_control_system.util.Config',        

        'tool_control_system.view.main.MainController',
        'tool_control_system.view.main.MainModel',
        'tool_control_system.view.main.List',
        
        'tool_control_system.view.supplier.Supplier',
        'tool_control_system.view.part.Part',
        'tool_control_system.view.tool.Tool',
        'tool_control_system.view.machine_counter.Machine_counter',

        'tool_control_system.view.users.Form',

        'tool_control_system.view.main.Detail', //muncul dan dipanggil di controller
        'tool_control_system.view.part.part_relation.Form',
    ],

    controller: 'main',

    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,

    titleRotation: 0,
    
    tabRotation: 0,

    plugins: 'viewport',

    /*header: false,
    flex:1,
    collapsible: true,*/

    header: {
        id: 'header',
        hideMode: 'display',
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}',
                icon: '{header.icon}'
            },
            flex: 0, // biar ga gede
            margin: '10 2 10 20',
        },
        /*items: [
            { 
                xtype: 'tbfill' 
            },{   
                type: 'left',
                tooltip: 'Cacher le menu',
                handler: function(event, toolEl, panel){
                    Ext.getCmp('header').getEl().hide();
                }
        }]*/
    },

    tabBar: {
        flex: 1,
        scrollable : 'vertical',
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top',
            // scrollable : 'horizontal',

        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 10,
        style : {
            'background-image':'resource/background2.jpg',
            'background-color': 'green'
        },
        tabConfig: {
            plugins: 'responsive',

            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left',
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Input Machine<br>Counter',
            iconCls: 'fa-cog',
            items: [{
                xtype : 'machine_counterview'
            }]
        },{
            title : 'Users',
            iconCls: 'fa-users',
            items: [{
                xtype: 'users_form'
            }]
        },{
            title: 'Log out',
            iconCls: 'fa-sign-out',
            tabConfig: {
                layout: {
                    align: 'stretch',
                    overflowHandler: 'none'
                },
                listeners: {
                    click: 'onLogOut'
                },
                iconAlign: 'left',
                textAlign: 'left'
            }      
        }
    ],

    initItems: function (){

        // console.log('initItems', this.access_level ) //this.access_level diisi di Application.js
        var a = this.access_level;
        
        if (a == 1) {
            self = this;
            //send ajax to determine count data
            Ext.Ajax.request({
                url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/datas/count',
                method: 'GET',
                params: {
                    token : token
                },
                success: function (response, opts){
                    console.log('success')
                    //console.log({response, opts})
                    res = JSON.parse(response.responseText);
                    data = res.data;

                    //set to viewModel
                    viewModel = self.getViewModel();
                    console.log({data,viewModel})
                    viewModel.set('notif', data)

                },
                failure : function(response, opts){

                }
            })

            this.items = [
                {
                    title: 'Home',
                    iconCls: 'fa-home',
                    // The following grid shares a store with the classic version's grid as well!
                    items: [{
                        xtype: 'mainlist'
                    }]
                }, {
                    title: 'Master Supplier',
                    iconCls: 'fa-user',
                    items: [{
                        xtype : 'supplierview'
                    }]
                }, {
                    title: 'Master Parts',
                    iconCls: 'fa-cog',
                    items: [{
                        xtype : 'partview',
                        /*activeTab: 0,
                        xtype : 'tabpanel',
                        items : [
                            {xtype: 'partview'},
                            {xtype: 'part_part_relation_form'}
                        ]*/
                    }]
                },{
                    title: 'Semi Parts',
                    iconCls: 'fa-cog',
                    items: [{
                        xtype : 'part_part_relation_form'
                    }]
                },{
                    title: 'Master Tools',
                    iconCls: 'fa-wrench',
                    items: [{
                        xtype : 'toolview'
                    }]
                },{
                    title: 'Input Machine<br>Counter',
                    iconCls: 'fa-cog',
                    items: [{
                        xtype : 'machine_counterview'
                    }]
                },{
                    title : 'Users',
                    iconCls: 'fa-users',
                    items: [{
                        xtype: 'users_form'
                    }]
                },{
                    title: 'Log out',
                    iconCls: 'fa-sign-out',
                    tabConfig: {
                        layout: {
                            align: 'stretch',
                            overflowHandler: 'none'
                        },
                        listeners: {
                            click: 'onLogOut'
                        },
                        iconAlign: 'left',
                        textAlign: 'left'
                    }      
                }
            ];

        }
        
        this.callParent();
    }

});
