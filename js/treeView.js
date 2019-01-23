var data = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' },
                    ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' },
                    ]
                }
            ]
        }
    ]
}

Vue.component('item', {
    template: '#item-template',
    props: {
        model: Object
    },
    data: function(){
        return {
            open: false,
            test: 'raw'
        }
    },
    computed: {
        isFolder: function () {
            // console.log("return: ", this.model.children && this.model.children.length)
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle: function () {
            // console.log("ifFolder: ", this.ifFolder)
            if(this.isFolder){
                // console.log("test")
                this.open = !this.open
                // this.test = 'update'
            }
        },
        changeType: function(){
            if(!this.isFolder){
                // console.log("this.model: ", this.model)
                Vue.set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }
        },
        addChild: function () {
            this.model.children.push({
                name: 'new stuff'
            })
        }
    }
})

// boot up the demo
var demo = new Vue({
    el: "#demo",
    data: {
        treeData: data
    }
})