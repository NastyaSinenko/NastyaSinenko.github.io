var app = new Vue({
    el: "#all-dill",
    data:{
        products:[
            {id:1,title:"Alligator",short_text:"Purpose: for greens, for canning, for freezing",image:'ukrop_sort_alligator.jpg',
            desc:{
                plant:{p1:"Plant type: bush.",
                       p2:"Rosette of leaves: raised.",
                       p3:"Foliage: strong."},
                       umbel:{u1:"Umbrella size: medium.",
                       u2:"Number of rays: 50-56.",
                       u3:"Inflorescence formation pattern: does not form an umbel for a long time."},
               
            }},
            {id:2,title:"Amazon",short_text:"Purpose:universal",image:'ukrop_sort_amazon.jpg',
            desc:{
                plant:{p1:"Plant type: bush.",
                    p2:"Rosette of leaves: raised.",
                    p3:"Foliage: strong."},
                    umbel:{u1:"Umbrella size: medium.",
                    u2:"Number of rays: 50-56.",
                    u3:"Inflorescence formation pattern: does not form an umbel for a long time."},
                
            }},
            {id:3,title:"Boroda monaha",short_text:"Purpose: for greens, for canning, for freezing",image:'ukrop_sort_boroda_monaha.jpg',
            desc:{
                plant:{p1:"Plant type: bush.",
                    p2:"Rosette of leaves: raised.",
                    p3:"Foliage: strong."},
                    umbel:{u1:"Umbrella size: medium.",
                    u2:"Number of rays: 50-56.",
                    u3:"Inflorescence formation pattern: does not form an umbel for a long time."},
                
            }},
            {id:4,title:"Gribovskij",short_text:"Purpose: for greens, for canning, for freezing",image:'ukrop_sort_gribovskij.jpg',
            desc:{
                plant:{p1:"Plant type: bush.",
                    p2:"Rosette of leaves: raised.",
                    p3:"Foliage: strong."},
                    umbel:{u1:"Umbrella size: medium.",
                    u2:"Number of rays: 50-56.",
                    u3:"Inflorescence formation pattern: does not form an umbel for a long time."},
                
            }},
            {id:5,title:"Zelyonyj snop",short_text:"Purpose: for greens, for canning, for freezing",image:'ukrop_sort_zelyonyj_snop.jpg',
            desc:{
                plant:{p1:"Plant type: bush.",
                    p2:"Rosette of leaves: raised.",
                    p3:"Foliage: strong."},
                    umbel:{u1:"Umbrella size: medium.",
                    u2:"Number of rays: 50-56.",
                    u3:"Inflorescence formation pattern: does not form an umbel for a long time."},
                
            }},
            {id:6,title:"Zontik",short_text:"Purpose: for greens, for canning, for freezing",image:'ukrop_sort_zontik.jpg',
                desc:{
                    plant:{p1:"Plant type: bush.",
                        p2:"Rosette of leaves: raised.",
                        p3:"Foliage: strong."},
                        umbel:{u1:"Umbrella size: medium.",
                        u2:"Number of rays: 50-56.",
                        u3:"Inflorescence formation pattern: does not form an umbel for a long time."},
                    
                }}
            ],
            product:[],
        cart:[],
        contactFields:[{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: false,
        cartVisible:false,
        formSubmitted: false,
        formVisible: true
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
            }

            if(this.cart.indexOf(String(id))==-1){
                this.cart.push(id);
                window.localStorage.setItem('cart',this.cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart:function(){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
                for(var value of this.cart){
                    for(var index in this.products){
                        if(value == this.products[index].id ){
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart:function(id){
            for(var index in this.product){
                if(id ==  this.product[index].id){
                    this.product.splice(index,1);
                    this.cart.splice(index,1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder:function(){
            
            this.formVisible=false;
            this.cartVisible=false;
            
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("OK");
        }
    },
});