/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Brain,
//   Clock,
//   Users,
//   CheckCircle,
//   // Star,
//   ArrowRight,
//   Zap,
//   Shield,
//   BarChart3,
//   Play,
//   MessageSquare,
//   Check,
//   X,
// } from "lucide-react";
// // import { supabase } from "@/lib/supabaseClient";
// import { useEffect } from "react";
// import { supabase } from "@/services/supabaseClient";
// // import { supabase } from "@/lib/supabaseClient";

// export default function LandingPage() {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const getUser = async () => {
//       const { data, error } = await supabase.auth.getUser();
//       console.log("user data ", data.user?.user_metadata);
//       if (error) {
//         console.error("Error getting user:", error.message);
//       } else {
//         // setUser(data.user);
//       }
//     };

//     getUser();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
//       {/* Header */}
//       <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Brain className="h-8 w-8 text-blue-600" />
//             <span className="text-2xl font-bold text-gray-900">
//               AI Interview
//             </span>
//           </div>
//           <nav className="hidden md:flex items-center space-x-8">
//             <button
//               onClick={() => scrollToSection("features")}
//               className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
//             >
//               Features
//             </button>
//             <button
//               onClick={() => scrollToSection("how-it-works")}
//               className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
//             >
//               How It Works
//             </button>
//             <button
//               onClick={() => scrollToSection("pricing")}
//               className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
//             >
//               Pricing
//             </button>
//             <Button
//               variant="outline"
//               className="bg-white text-gray-900 border-gray-300"
//             >
//               Sign In
//             </Button>
//             <Button className="bg-blue-600 hover:bg-blue-700">
//               Get Started
//             </Button>
//           </nav>
//           <Button
//             variant="outline"
//             className="md:hidden bg-white text-gray-900 border-gray-300"
//           >
//             Menu
//           </Button>
//         </div>
//       </header>
//       {/* Hero Section */}
//       <section className="py-20 lg:py-32">
//         <div className="container mx-auto px-4 text-center">
//           <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
//             <Zap className="w-4 h-4 mr-1" />
//             AI-Powered Interviews
//           </Badge>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//             Transform Your
//             <span className="text-blue-600 block">Interview Process</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Leverage advanced AI to conduct intelligent, unbiased interviews
//             that save time and identify the best candidates faster than ever
//             before.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Button
//               size="lg"
//               className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
//             >
//               Start Free Trial
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="bg-white text-gray-900 border-gray-300 text-lg px-8 py-4"
//             >
//               <Play className="mr-2 h-5 w-5" />
//               Watch Demo
//             </Button>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
//             <div className="flex items-center">
//               <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//               No credit card required
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//               14-day free trial
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//               Setup in 5 minutes
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features Section */}
//       <section id="features" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Why Choose AI Interview?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Our AI-powered platform revolutionizes the hiring process with
//               intelligent automation and deep insights.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                   <Brain className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <CardTitle>AI-Powered Analysis</CardTitle>
//                 <CardDescription>
//                   Advanced algorithms analyze responses, body language, and
//                   communication patterns to provide comprehensive candidate
//                   insights.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                   <Clock className="h-6 w-6 text-green-600" />
//                 </div>
//                 <CardTitle>Save 80% Time</CardTitle>
//                 <CardDescription>
//                   Automate initial screening and focus your time on the most
//                   promising candidates with pre-qualified insights.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//                   <Shield className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <CardTitle>Bias-Free Hiring</CardTitle>
//                 <CardDescription>
//                   Eliminate unconscious bias with objective AI evaluation that
//                   focuses purely on skills and qualifications.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
//                   <BarChart3 className="h-6 w-6 text-orange-600" />
//                 </div>
//                 <CardTitle>Detailed Analytics</CardTitle>
//                 <CardDescription>
//                   Get comprehensive reports with scoring, recommendations, and
//                   insights to make data-driven hiring decisions.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
//                   <Users className="h-6 w-6 text-red-600" />
//                 </div>
//                 <CardTitle>Scale Effortlessly</CardTitle>
//                 <CardDescription>
//                   Handle hundreds of interviews simultaneously without
//                   compromising quality or candidate experience.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
//                   <MessageSquare className="h-6 w-6 text-teal-600" />
//                 </div>
//                 <CardTitle>Natural Conversations</CardTitle>
//                 <CardDescription>
//                   AI conducts natural, engaging conversations that put
//                   candidates at ease while gathering valuable insights.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
//                   <MessageSquare className="h-6 w-6 text-indigo-600" />
//                 </div>
//                 <CardTitle>Continuous Improvement</CardTitle>
//                 <CardDescription>
//                   Your feedback directly shapes our platform. We've implemented
//                   127+ features based on user suggestions, with an average
//                   response time of less than 24 hours.
//                 </CardDescription>
//               </CardHeader>
//             </Card>
//           </div>
//         </div>
//       </section>
//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               How It Works
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Get started in minutes with our simple three-step process
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">1</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 Setup Interview
//               </h3>
//               <p className="text-gray-600">
//                 Create your interview template, set questions, and define
//                 evaluation criteria in just a few clicks.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">2</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 AI Conducts Interview
//               </h3>
//               <p className="text-gray-600">
//                 Our AI interviewer engages with candidates in natural
//                 conversations, adapting questions based on responses.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">3</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 Get Insights
//               </h3>
//               <p className="text-gray-600">
//                 Receive detailed analysis, scores, and recommendations to make
//                 informed hiring decisions quickly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Stats Section */}
//       <section className="py-20 bg-blue-600">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8 text-center text-white">
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
//               <div className="text-blue-100">Interviews Conducted</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
//               <div className="text-blue-100">Accuracy Rate</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
//               <div className="text-blue-100">Time Saved</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
//               <div className="text-blue-100">Companies Trust Us</div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Simple, Transparent Pricing
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Choose the perfect plan for your hiring needs. All plans include
//               our core AI interview features.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* Starter Plan */}
//             <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
//               <CardHeader className="text-center pb-8">
//                 <CardTitle className="text-2xl font-bold text-gray-900">
//                   Starter
//                 </CardTitle>
//                 <CardDescription className="text-gray-600 mt-2">
//                   Perfect for small teams getting started
//                 </CardDescription>
//                 <div className="mt-6">
//                   <span className="text-4xl font-bold text-gray-900">$29</span>
//                   <span className="text-gray-600 ml-2">/month</span>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Up to 50 interviews/month
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">AI-powered interviews</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Basic analytics dashboard
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">Email support</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Standard question templates
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <X className="h-5 w-5 text-gray-400 mr-3" />
//                     <span className="text-gray-400">Custom branding</span>
//                   </div>
//                   <div className="flex items-center">
//                     <X className="h-5 w-5 text-gray-400 mr-3" />
//                     <span className="text-gray-400">API access</span>
//                   </div>
//                 </div>
//                 <Button className="w-full mt-8 bg-gray-900 hover:bg-gray-800">
//                   Get Started
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Professional Plan */}
//             <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <Badge className="bg-blue-500 text-white px-4 py-1">
//                   Most Popular
//                 </Badge>
//               </div>
//               <CardHeader className="text-center pb-8">
//                 <CardTitle className="text-2xl font-bold text-gray-900">
//                   Professional
//                 </CardTitle>
//                 <CardDescription className="text-gray-600 mt-2">
//                   Ideal for growing companies
//                 </CardDescription>
//                 <div className="mt-6">
//                   <span className="text-4xl font-bold text-gray-900">$99</span>
//                   <span className="text-gray-600 ml-2">/month</span>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Up to 200 interviews/month
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">Everything in Starter</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Advanced analytics & insights
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Custom question templates
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">Priority support</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Team collaboration tools
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">Basic API access</span>
//                   </div>
//                 </div>
//                 <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">
//                   Get Started
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Enterprise Plan */}
//             <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
//               <CardHeader className="text-center pb-8">
//                 <CardTitle className="text-2xl font-bold text-gray-900">
//                   Enterprise
//                 </CardTitle>
//                 <CardDescription className="text-gray-600 mt-2">
//                   For large organizations with custom needs
//                 </CardDescription>
//                 <div className="mt-6">
//                   <span className="text-4xl font-bold text-gray-900">
//                     Custom
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Unlimited interviews
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Everything in Professional
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Custom branding & white-label
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">Full API access</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">
//                       Dedicated account manager
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">Custom integrations</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Check className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-gray-700">SLA guarantee</span>
//                   </div>
//                 </div>
//                 <Button
//                   variant="outline"
//                   className="w-full mt-8 border-purple-600 text-purple-600 hover:bg-purple-50"
//                 >
//                   Contact Sales
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="min-h-screen py-20 bg-gray-50 flex items-center justify-center">
//         <div className="container px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Share Your Feedback
//               </h2>
//               <p className="text-xl text-gray-600">
//                 Help us improve AI Interview by sharing your thoughts and
//                 suggestions
//               </p>
//             </div>

//             <div className="flex justify-center">
//               <div className="w-full lg:w-3/4">
//                 <div className="border-0 shadow-lg rounded-lg overflow-hidden bg-white">
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                       <span className="mr-2">💬</span> Send Feedback
//                     </h3>
//                     <p className="text-gray-600 mb-4">
//                       We value your input and read every message
//                     </p>
//                     <form className="space-y-6">
//                       <div className="grid md:grid-cols-2 gap-4">
//                         <div>
//                           <label
//                             htmlFor="name"
//                             className="block text-sm font-medium text-gray-700 mb-2"
//                           >
//                             Name
//                           </label>
//                           <input
//                             type="text"
//                             id="name"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             placeholder="Your name"
//                           />
//                         </div>
//                         <div>
//                           <label
//                             htmlFor="email"
//                             className="block text-sm font-medium text-gray-700 mb-2"
//                           >
//                             Email
//                           </label>
//                           <input
//                             type="email"
//                             id="email"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             placeholder="your@email.com"
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="category"
//                           className="block text-sm font-medium text-gray-700 mb-2"
//                         >
//                           Feedback Category
//                         </label>
//                         <select
//                           id="category"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         >
//                           <option value="">Select a category</option>
//                           <option value="feature-request">
//                             Feature Request
//                           </option>
//                           <option value="bug-report">Bug Report</option>
//                           <option value="general-feedback">
//                             General Feedback
//                           </option>
//                           <option value="improvement">
//                             Improvement Suggestion
//                           </option>
//                           <option value="praise">Praise</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="rating"
//                           className="block text-sm font-medium text-gray-700 mb-2"
//                         >
//                           Overall Rating
//                         </label>
//                         <div className="flex gap-2">
//                           {[1, 2, 3, 4, 5].map((star) => (
//                             <button
//                               key={star}
//                               type="button"
//                               className="text-gray-300 hover:text-yellow-400 transition-colors"
//                             >
//                               ⭐
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="message"
//                           className="block text-sm font-medium text-gray-700 mb-2"
//                         >
//                           Your Feedback
//                         </label>
//                         <textarea
//                           id="message"
//                           rows={5}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="Tell us about your experience, suggestions, or any issues you've encountered..."
//                         ></textarea>
//                       </div>

//                       <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//                       >
//                         Submit Feedback
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Ready to Transform Your Hiring?
//           </h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Join thousands of companies already using AI Interview to find the
//             best talent faster.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button
//               size="lg"
//               className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
//             >
//               Start Your Free Trial
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="bg-white text-gray-900 border-gray-300 text-lg px-8 py-4"
//             >
//               Schedule Demo
//             </Button>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Brain className="h-8 w-8 text-blue-400" />
//                 <span className="text-2xl font-bold">AI Interview</span>
//               </div>
//               <p className="text-gray-400 mb-4">
//                 Revolutionizing the hiring process with AI-powered interviews
//                 that save time and improve candidate selection.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">Product</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     API
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Integrations
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">Support</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Status
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Privacy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>© 2024 AI Interview. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Play,
  MessageSquare,
  Check,
  X,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error getting user:", error.message);
      } else {
        setUser(data.user);
        console.log("user data", data.user?.user_metadata);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          console.log("User logged in:", session.user);
        } else {
          setUser(null);
          console.log("User logged out");
        }
      }
    );
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              AI Interview
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
            >
              Pricing
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="text-gray-700 font-medium">
                  {user.user_metadata?.full_name}
                </div>
                <img
                  src={user.user_metadata?.avatar_url}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <Button
                  variant="outline"
                  className="border-gray-300"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="bg-white text-gray-900 border-gray-300"
                  onClick={handleLogin}
                >
                  Sign In with Google
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Interviews
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="text-blue-600 block">Interview Process</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leverage advanced AI to conduct intelligent, unbiased interviews
            that save time and identify the best candidates faster than ever
            before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
              onClick={() => router.push("/dashboard")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-gray-900 border-gray-300 text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Setup in 5 minutes
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Interview?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform revolutionizes the hiring process with
              intelligent automation and deep insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI-Powered Analysis</CardTitle>
                <CardDescription>
                  Advanced algorithms analyze responses, body language, and
                  communication patterns to provide comprehensive candidate
                  insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Save 80% Time</CardTitle>
                <CardDescription>
                  Automate initial screening and focus your time on the most
                  promising candidates with pre-qualified insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Bias-Free Hiring</CardTitle>
                <CardDescription>
                  Eliminate unconscious bias with objective AI evaluation that
                  focuses purely on skills and qualifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>
                  Get comprehensive reports with scoring, recommendations, and
                  insights to make data-driven hiring decisions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Scale Effortlessly</CardTitle>
                <CardDescription>
                  Handle hundreds of interviews simultaneously without
                  compromising quality or candidate experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Natural Conversations</CardTitle>
                <CardDescription>
                  AI conducts natural, engaging conversations that put
                  candidates at ease while gathering valuable insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Continuous Improvement</CardTitle>
                <CardDescription>
                  Your feedback directly shapes our platform. We've implemented
                  127+ features based on user suggestions, with an average
                  response time of less than 24 hours.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Setup Interview
              </h3>
              <p className="text-gray-600">
                Create your interview template, set questions, and define
                evaluation criteria in just a few clicks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Conducts Interview
              </h3>
              <p className="text-gray-600">
                Our AI interviewer engages with candidates in natural
                conversations, adapting questions based on responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Insights
              </h3>
              <p className="text-gray-600">
                Receive detailed analysis, scores, and recommendations to make
                informed hiring decisions quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Interviews Conducted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
              <div className="text-blue-100">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Companies Trust Us</div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your hiring needs. All plans include
              our core AI interview features.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Starter
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Perfect for small teams getting started
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Up to 50 interviews/month
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">AI-powered interviews</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Basic analytics dashboard
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Email support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Standard question templates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-400">Custom branding</span>
                  </div>
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-400">API access</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-gray-900 hover:bg-gray-800">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Professional
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Ideal for growing companies
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Up to 200 interviews/month
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Everything in Starter</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Advanced analytics & insights
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Custom question templates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Team collaboration tools
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic API access</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  For large organizations with custom needs
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    Custom
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Unlimited interviews
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Everything in Professional
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Custom branding & white-label
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Full API access</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Dedicated account manager
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom integrations</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SLA guarantee</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-8 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-20 bg-gray-50 flex items-center justify-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Share Your Feedback
              </h2>
              <p className="text-xl text-gray-600">
                Help us improve AI Interview by sharing your thoughts and
                suggestions
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full lg:w-3/4">
                <div className="border-0 shadow-lg rounded-lg overflow-hidden bg-white">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">💬</span> Send Feedback
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We value your input and read every message
                    </p>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Feedback Category
                        </label>
                        <select
                          id="category"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a category</option>
                          <option value="feature-request">
                            Feature Request
                          </option>
                          <option value="bug-report">Bug Report</option>
                          <option value="general-feedback">
                            General Feedback
                          </option>
                          <option value="improvement">
                            Improvement Suggestion
                          </option>
                          <option value="praise">Praise</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="rating"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Overall Rating
                        </label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className="text-gray-300 hover:text-yellow-400 transition-colors"
                            >
                              ⭐
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Your Feedback
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Tell us about your experience, suggestions, or any issues you've encountered..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        Submit Feedback
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using AI Interview to find the
            best talent faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-gray-900 border-gray-300 text-lg px-8 py-4"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AI Interview</span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing the hiring process with AI-powered interviews
                that save time and improve candidate selection.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 AI Interview. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
