Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
        console.log('our first app woot');

        var myStore=Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(mystore, mydata, success) {
                    //process data
                    console.log('got data',mystore,mydata,success);

                    var mygrid = Ext.create('Rally.ui.grid.Grid',{
                        store : mystore,
                       
                            columnCfgs: [
                                'FormattedID',
                                'Name'
                                
                            ],
                          
                       // renderTo: Ext.getBody()
                    });
                    console.log('mygrid',mygrid);
                    this.add(mygrid);
                    console.log("what is this",this);
                },
                scope:this

            },
            fetch: ['FormattedID','Name']
        });
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    }
});
