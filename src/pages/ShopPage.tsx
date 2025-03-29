
import { useState } from "react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Search,
  Filter,
  BookOpen,
  Pill,
  Baby,
  Gift,
  ShoppingBag,
  Trash2
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import PaymentButton from "@/components/PaymentButton";

// Product type definition
type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  rating: number;
  image: string;
  category: string;
  tag?: string;
  description: string;
  productId?: string; // Stripe product ID
};

// CartItem type definition
type CartItem = {
  product: Product;
  quantity: number;
};

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: "The Mindful Pregnancy Book",
      price: 1200,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      category: "Books",
      description: "A comprehensive guide to mindful practices during pregnancy for optimal well-being.",
      productId: "prod_book_1"
    },
    {
      id: 2,
      name: "Prenatal Vitamins Premium",
      price: 1800,
      discountPrice: 1500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      category: "Supplements",
      tag: "Best Seller",
      description: "Complete prenatal vitamin formulation with folic acid, iron, calcium, and essential nutrients.",
      productId: "prod_vitamins_1"
    },
    {
      id: 3,
      name: "Baby's First Year Journal",
      price: 850,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1",
      category: "Books",
      description: "Document your baby's milestones and memories during the first 12 months.",
      productId: "prod_book_2"
    },
    {
      id: 4,
      name: "Pregnancy Wellness Tea",
      price: 450,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
      category: "Wellness",
      description: "Caffeine-free herbal tea blend designed to support pregnancy wellness and comfort.",
      productId: "prod_wellness_1"
    },
    {
      id: 5,
      name: "Baby Development Tracker",
      price: 1400,
      discountPrice: 1100,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      category: "Tools",
      description: "Digital tracker to monitor and record your baby's development milestones.",
      productId: "prod_tools_1"
    },
    {
      id: 6,
      name: "Postpartum Care Kit",
      price: 2500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f",
      category: "Wellness",
      tag: "New",
      description: "Comprehensive kit with essential items for postpartum recovery and comfort.",
      productId: "prod_wellness_2"
    },
    {
      id: 7,
      name: "Breastfeeding Essentials Bundle",
      price: 1800,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1584473457333-8c9f4d4b9026",
      category: "Essentials",
      description: "Complete bundle with all essentials for successful breastfeeding journey.",
      productId: "prod_essentials_1"
    },
    {
      id: 8,
      name: "Baby Sleep Guide eBook",
      price: 600,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      category: "Books",
      description: "Comprehensive guide to understanding and improving your baby's sleep patterns.",
      productId: "prod_book_3"
    },
    {
      id: 9,
      name: "New Parent Gift Box",
      price: 3000,
      discountPrice: 2400,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
      category: "Gifts",
      tag: "Popular",
      description: "Thoughtfully curated gift box for new parents with essentials and self-care items.",
      productId: "prod_gifts_1"
    }
  ];

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return (a.discountPrice || a.price) - (b.discountPrice || b.price);
      case "price-high-low":
        return (b.discountPrice || b.price) - (a.discountPrice || a.price);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Add to cart function
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      // Check if product is already in cart
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Increment quantity if already in cart
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Add new item with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
    
    toast.success("Product added to cart!", {
      description: "View your cart to checkout.",
    });
    setIsCartOpen(true);
  };

  // Remove from cart function
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast("Item removed from cart");
  };

  // Update item quantity
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Calculate cart total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.product.discountPrice || item.product.price;
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  // Handle successful checkout
  const handleCheckoutSuccess = () => {
    toast.success("Order placed successfully!", {
      description: "Thank you for your purchase.",
    });
    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-lavender/20 section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nurture Hub Shop</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Discover carefully selected products to support your pregnancy and parenting journey, curated by Dr. Nitika.
          </p>
          
          {/* Shopping Cart Button */}
          <div className="mt-8">
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="relative">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  View Cart
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-primary text-white">
                      {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md flex flex-col">
                <SheetHeader>
                  <SheetTitle>Your Shopping Cart</SheetTitle>
                  <SheetDescription>
                    {cartItems.length === 0 
                      ? "Your cart is empty" 
                      : `You have ${cartItems.reduce((total, item) => total + item.quantity, 0)} items in your cart`}
                  </SheetDescription>
                </SheetHeader>
                
                {cartItems.length > 0 ? (
                  <>
                    <div className="flex-1 overflow-y-auto py-4">
                      {cartItems.map((item) => (
                        <div key={item.product.id} className="flex py-4">
                          <div className="h-20 w-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <h4 className="font-medium">{item.product.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.product.discountPrice 
                                ? `₹${item.product.discountPrice}` 
                                : `₹${item.product.price}`}
                            </p>
                            <div className="flex items-center mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </Button>
                              <span className="mx-2">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="ml-auto h-7 w-7 text-destructive"
                                onClick={() => removeFromCart(item.product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{calculateTotal()}</span>
                      </div>
                      <div className="flex justify-between mb-2 text-muted-foreground text-sm">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium text-lg mb-6">
                        <span>Total</span>
                        <span>₹{calculateTotal()}</span>
                      </div>
                      <PaymentButton
                        amount={calculateTotal()}
                        description="Nurture Hub Shop Order"
                        onSuccess={handleCheckoutSuccess}
                        useCheckout={true}
                        productId="cart_checkout"
                      >
                        Proceed to Checkout
                      </PaymentButton>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-6">
                      Looks like you haven't added any products to your cart yet.
                    </p>
                    <Button onClick={() => setIsCartOpen(false)}>
                      Browse Products
                    </Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Categories Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
            <TabsList className="w-full flex justify-start overflow-x-auto pb-2 mb-6">
              <TabsTrigger value="" className="text-sm md:text-base">
                All Products
              </TabsTrigger>
              <TabsTrigger value="Books" className="text-sm md:text-base">
                <BookOpen className="h-4 w-4 mr-2 hidden sm:inline" /> Books & eBooks
              </TabsTrigger>
              <TabsTrigger value="Supplements" className="text-sm md:text-base">
                <Pill className="h-4 w-4 mr-2 hidden sm:inline" /> Supplements
              </TabsTrigger>
              <TabsTrigger value="Wellness" className="text-sm md:text-base">
                <Baby className="h-4 w-4 mr-2 hidden sm:inline" /> Wellness
              </TabsTrigger>
              <TabsTrigger value="Gifts" className="text-sm md:text-base">
                <Gift className="h-4 w-4 mr-2 hidden sm:inline" /> Gifts
              </TabsTrigger>
            </TabsList>
            
            {/* Search and Filter Controls */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Recommended</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <TabsContent value="" className="mt-0">
              {sortedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    No products found matching your search.
                  </p>
                  <Button onClick={() => { setSearchQuery(""); setSelectedCategory(""); }}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover-scale">
                      <div className="relative aspect-square bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                        {product.tag && (
                          <Badge className="absolute top-3 left-3 bg-primary">
                            {product.tag}
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                            <CardDescription>{product.category}</CardDescription>
                          </div>
                          <div className="text-sm bg-brand-lavender/20 px-2 py-1 rounded-full">
                            ★ {product.rating}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {product.description}
                        </p>
                        <div className="flex items-center">
                          {product.discountPrice ? (
                            <>
                              <span className="text-lg font-bold text-primary">₹{product.discountPrice}</span>
                              <span className="text-sm text-muted-foreground line-through ml-2">₹{product.price}</span>
                            </>
                          ) : (
                            <span className="text-lg font-bold text-primary">₹{product.price}</span>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          onClick={() => addToCart(product)}
                          className="w-full"
                          variant="default"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            {/* Category Content */}
            {["Books", "Supplements", "Wellness", "Gifts"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover-scale">
                      <div className="relative aspect-square bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                        {product.tag && (
                          <Badge className="absolute top-3 left-3 bg-primary">
                            {product.tag}
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                            <CardDescription>{product.category}</CardDescription>
                          </div>
                          <div className="text-sm bg-brand-lavender/20 px-2 py-1 rounded-full">
                            ★ {product.rating}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {product.description}
                        </p>
                        <div className="flex items-center">
                          {product.discountPrice ? (
                            <>
                              <span className="text-lg font-bold text-primary">₹{product.discountPrice}</span>
                              <span className="text-sm text-muted-foreground line-through ml-2">₹{product.price}</span>
                            </>
                          ) : (
                            <span className="text-lg font-bold text-primary">₹{product.price}</span>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          onClick={() => addToCart(product)}
                          className="w-full"
                          variant="default"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-brand-mint/20 section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dr. Nitika's Recommendations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.tag).map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale">
                <div className="relative aspect-square bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  {product.tag && (
                    <Badge className="absolute top-3 left-3 bg-primary">
                      {product.tag}
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </div>
                    <div className="text-sm bg-brand-lavender/20 px-2 py-1 rounded-full">
                      ★ {product.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center">
                    {product.discountPrice ? (
                      <>
                        <span className="text-lg font-bold text-primary">₹{product.discountPrice}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">₹{product.price}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => addToCart(product)}
                    className="w-full"
                    variant="default"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-lavender/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"></path>
                  <path d="M12 9v3l1.5 1.5"></path>
                  <path d="M17 16.5V17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery across India with order tracking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-lavender/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Selection</h3>
              <p className="text-muted-foreground">
                Every product carefully selected by Dr. Nitika for quality and effectiveness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-lavender/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple payment options with advanced security for safe transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-purple text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Shopping Updates</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new products, exclusive discounts, and seasonal promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/20 text-white placeholder:text-white/70 border-white/30"
            />
            <Button variant="secondary" className="text-primary font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
