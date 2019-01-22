var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'yifang页面加载于' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello Vue!"
    }
})

// component
Vue.component('todo-item', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义特性。
    // 这个 prop 名为 todo。
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: 'others' }
        ]
    }
})

var data = { a: 1 }
var vm = new Vue({
    data: data
})
// console.log("vm.a == data.a: ", vm.a == data.a);
// 设置属性也会影响到原始数据
// ……反之亦然
vm.a = 2;
// console.log(data.a);
data.a = 3;
// console.log(vm.a);

vm.b = 'hi';
// console.log(vm.a);
// console.log(vm.b);

// freeze的使用
var data = {
    foo: 'bar'
}
// Object.freeze(obj)
var vm2 = new Vue({
    el: '#app-8',
    data: {
        mydata: data,
        message: 'Hi, Vuejs!'
    }
})
console.log("vm2.$el: ", vm2.$el);
// console.log("vm2.$data: ", vm2.$data)
// console.log("vm2.$data.mydata: ", vm2.$data.mydata)
// console.log("vm2.$data.message: ", vm2.$data.message)
// console.log(data)

new Vue({
    data: {
        a: 1
    },
    // created 钩子可以用来在一个实例被创建之后执行代码：
    created: function(){
        console.log('a is: ' + this.a)
    }
})

var vm3 = new Vue({
  el: "#app-9",
  data: {
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: "thisp",
    // <h1 style="display: none;">Hello!</h1>
      ok: true
  }
});

// v-for parameters
var app10 = new Vue({
    el: '#app-10',
    data: {
        parentMessage: 'Parent',
        items: [
            { id: 0, message: 'new two' },
            { id: 1, message: 'Foo' },
            { id: 2, message: 'Bar' },
            { id: 3, message: 'new one' }
        ],
        object: {
            firstName: 'John',
            gender: 'male',
            lastName: 'Doe',
            age: 30
        }
    }
})

// app10.items[2].id = 10; // 不是响应性的
// app10.items.length = 2; // 不是响应性的
// 为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：
// Vue.set
// Vue.set(app10.items, 2, 10);
// Array.prototype.splice
app10.items.splice(2, 1, 11);
// 为了解决第二类问题，你可以使用 splice：
app10.items.splice(3);

var app11 = new Vue({
    el: '#app-11',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 3 === 0
            })
        }
    }
})

//Todo list example
Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

var app12 = new Vue({
  el: "#app-12",
  data: {
    checked: false,
    selected: "",
    toggle: 'yes',
    pick: false,
    a: true
  }
});