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
        'tool_control_system.view.part.Part'


    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
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
            iconCls: 'fa-users',
            items: [{
                xtype : 'partview'
            }]
        }, {
            title: 'Master Tools',
            iconCls: 'fa-wrench',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Input Machine Counter',
            iconCls: 'fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }

    ]
});
