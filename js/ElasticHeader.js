Vue.component('draggable-header-view', {
    template: 'header-view-template',
    data: function(){
        return {
            dragging: false,
            // quadratic bezier control point
            c: { x: 160, y: 160 },
            // record drag start point
            start: { x: 0, y: 0 }
        }
    },
    computed: {
        headerPath: function(){
             return 'M0,0 L320,0 320,160' +
                 'Q' + this.c.x + ',' + this.c.y +
                 ' 0,160'
        },
        contentPosition: function(){
            var dy = this.c.y - 160
            var dampen = dy > 0 ? 2 : 4
            return {
                transform: 'translate3d(0,' + dy / dampen + 'px,0)'
            }
        }
    },
    methods: {
        // not finish yet
        // 不知道这个在干啥
    }

})