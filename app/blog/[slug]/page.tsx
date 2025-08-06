import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
} from "lucide-react";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Helper: get absolute base URL
const baseUrl = process.env.BACKEND_URL;
console.log("Base URL:", baseUrl);
// Fetch blog post by slug
async function getBlogPost(slug: string) {
  try {
    const res = await fetch(`${baseUrl}/api/blog?slug=${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.data.find((p: any) => p.slug === slug) || null;
  } catch (err) {
    console.error("Error fetching blog post:", err);
    return null;
  }
}

// Fetch related posts
async function getRelatedPosts(currentSlug: string, category?: string) {
  try {
    const res = await fetch(`${baseUrl}/api/blog`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data.filter((p: any) => p.slug !== currentSlug);
  } catch (err) {
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = await getBlogPost(slug);
  console.log("Fetched post:", post?.image);
  if (!post) return notFound();

  const relatedPosts = await getRelatedPosts(slug, post.category);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={post?.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Blog</span>
            </Link>

            <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/30">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Travel Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
                  <div className="relative h-64 md:h-96">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 md:p-12">
                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                      <div
                        className="text-slate-700 leading-relaxed space-y-6"
                        dangerouslySetInnerHTML={{
                          __html: marked(post.content || ""),
                        }}
                      />
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-12 pt-8 border-t">
                        <div className="flex items-center space-x-2 mb-4">
                          <Tag className="h-5 w-5 text-slate-600" />
                          <span className="font-semibold text-slate-800">
                            Tags:
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag: string, index: number) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Share2 className="h-5 w-5 text-slate-600" />
                          <span className="font-semibold text-slate-800">
                            Share this article:
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300 bg-transparent"
                          >
                            Facebook
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300 bg-transparent"
                          >
                            Twitter
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300 bg-transparent"
                          >
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Author Info */}
                <Card className="border-0 shadow-lg bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2">
                        {post.author}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        Travel Expert & Writer
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Passionate about discovering hidden gems and sharing
                        travel insights with fellow adventurers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">Stay Updated</h3>
                    <p className="text-sm text-emerald-100 mb-4">
                      Get the latest travel tips and destination guides
                      delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 rounded-lg text-slate-800 text-sm"
                      />
                      <Button className="w-full bg-white text-emerald-700 hover:bg-gray-100 text-sm">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Categories */}
                <Card className="border-0 shadow-lg bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-800 mb-4">
                      Popular Categories
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Travel Guides",
                        "Destinations",
                        "Budget Travel",
                        "Adventure",
                        "Food & Culture",
                        "Solo Travel",
                      ].map((category) => (
                        <Link
                          key={category}
                          href={`/blog?category=${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors py-1"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Related Articles
                </h2>
                <p className="text-slate-600">
                  Continue exploring with these related travel guides
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map((relatedPost: any) => (
                  <Card
                    key={relatedPost.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-2xl"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-emerald-600 text-white border-0 shadow-lg text-xs">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 leading-tight">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-slate-500 mb-4">
                        <div className="flex items-center mr-4">
                          <User className="h-3 w-3 mr-1" />
                          <span>{relatedPost.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent group-hover:bg-emerald-600 group-hover:text-white transition-all"
                        >
                          Read Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Let our travel experts help you create the perfect itinerary based
            on the insights from this guide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8"
              >
                Start Planning My Trip
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-700 font-semibold px-8 bg-transparent"
              >
                Speak with Expert
              </Button>
            </Link>
            <br />
            <small>{baseUrl}</small>
          </div>
        </div>
      </section>
    </div>
  );
}
