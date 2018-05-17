Ext.define('tool_control_system.util.SupplierCombobox', {
	extend: 'Ext.form.field.ComboBox',
	xtype: 'supplier_combobox',
	queryParam : 'name',
    name: 'supplier_id',
    store : {
        type : 'all_suppliers'
    },
    displayField:'name',
    emptyText : 'Supplier',
    valueField: 'id',
    // queryMode: 'local', 
    fieldLabel: 'Supplier',
    bind:{
        value: '{model.supplier_id}',
    },
    allowBlank: false,
    disabled:  true
});