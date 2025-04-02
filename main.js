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
            btnVisible: 0,
            cartVisible:0,
            formSubmitted: false,
            formVisible: 1
        },
        mounted:function(){
            this.getProduct();
            this.checkInCart();
           
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
            
        },
            }})
