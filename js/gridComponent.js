Vue.component('demo-grid', {
    template: "#grid-template",
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function(){
        var sortOrders = {}
        this.columns.forEach(function(key){
            sortOrders[key] = 1
        })
        // console.log("columns: ", this.columns)
        // console.log("sortOrders: ", sortOrders)
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredData: function(){
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var data = this.data
            if(filterKey) {
                data = data.filter(function(row){
                    // Object.keys(row)得到row的所有属性：['name', 'power']
                    // The some() method tests whether at least one element in the array passes the test implemented by the provided function.
                    return Object.keys(row).some(function(key){
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if(sortKey){
                // The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
                // The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
                // console.log("data: ", typeof(data))
                // console.log("data.slice(): ", typeof (data.slice()))
                data = data.slice().sort(function(a, b){
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1: -1) * order
                })
            }
            return data
        }
    },
    filters: {
        capitalize: function(str){
            // 返回首字母大写的单词
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        sortBy: function(key){
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})