var vm = new Vue({
    el: ".my-div",
    data:{
        message: 'Hello Vue Js',
        votes:0,
        name:'',

        firstname:'',
        lastname:'',
        fullname:'',

        fnumber:'',
        snumber:'',
        result:'',

        courses:[
            {title:"Java",instructor:'Md. Toufiqul Islam'},
            {title:"C#",instructor:'ABC'},
            {title:"PHP",instructor:'XYZ'},
            {title:"Python",instructor:'Ami nije'}
        ]
    },

    methods:{
        getfullname:function () {
            this.fullname = this.firstname+" "+this.lastname;

        },

        addition:function () {
            this.result = parseInt(this.fnumber)+parseInt(this.snumber)
        },
        substruction:function () {
            this.result = parseInt(this.fnumber)-parseInt(this.snumber)
        },
        division:function () {
            this.result = parseInt(this.fnumber)/parseInt(this.snumber)
        },
        multiplication:function () {
            this.result = parseInt(this.fnumber)*parseInt(this.snumber)
        }
    }

});