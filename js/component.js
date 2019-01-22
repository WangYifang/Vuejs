// 定义一个名为 button-counter 的新组件
// 先注册再使用
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click = "$emit('enlarge-text', 0.1)">
                Enlarge text 
            </button>
            <div v-html="post.content"></div>
        </div>
    `
})

var app1 = new Vue({
    el: '#components-demo'
})

var app2 = new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [{
                id: 1,
                title: 'My journey with Vue',
                content: 'My journey with VueMy journey with VueMy journey with VueMy journey with VueMy journey with VueMy journey with Vue'
            },
            {
                id: 2,
                title: 'Blogging with Vue'
            },
            {
                id: 3,
                title: 'Why Vue is so fun'
            }
        ]
    }
})

var app3 = new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [{
                id: 1,
                title: 'My journey with Vue',
                content: 'My journey with VueMy journey with VueMy journey with VueMy journey with VueMy journey with VueMy journey with Vue'
            },
            {
                id: 2,
                title: 'Blogging with Vue'
            },
            {
                id: 3,
                title: 'Why Vue is so fun'
            }
        ],
        postFontSize: 1
    }
})

// v-model on component
// 在组件上使用 v-model
Vue.component('custom-input', {
    props: ['value'],
    template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
Vue.component('alert-box', {
    template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
var app4 = new Vue({
    el: '#v-model',
    data:{
        searchText: "placeholder"
    }
})

// <!-- Custom Directives 自定义指令 -->
Vue.directive('focus', {
    inserted: function (el, binding) {
        el.focus()
        console.log("binding: ", binding)
    }
})

Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML = 
            'name: ' + s(binding.name) + '<br>' +
            'value: ' + s(binding.value) + '<br>' + 
            'expression: ' + s(binding.expression) + '<br>'
    }
})

var app5 = new Vue({
    el: '#hook-arguments-example',
    data: {
        message: 'hello!'
    }
})