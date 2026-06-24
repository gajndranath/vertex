"use client";

import { useState } from "react";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to the backend POST /api/blog
    alert("Blog saved (dummy action)!");
  };

  return (
    <div className="py-10 container mx-auto px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Write a New Blog Post</h1>
      
      <form onSubmit={handleSave} className="space-y-6 bg-card p-8 rounded shadow border border-muted/20">
        <div>
          <label className="block text-sm font-medium mb-1">Post Title</label>
          <input 
            type="text" 
            className="w-full p-2 border border-muted/20 rounded bg-background" 
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSlug(e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
            }}
            placeholder="e.g. The Future of FEA in Aerospace"
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug (Auto-generated)</label>
          <input 
            type="text" 
            className="w-full p-2 border border-muted/20 rounded bg-muted/50 text-muted" 
            value={slug}
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content (Markdown / Rich Text)</label>
          <textarea 
            rows={12} 
            className="w-full p-2 border border-muted/20 rounded bg-background font-mono text-sm" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here..."
            required 
          />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-accent text-white px-6 py-2 rounded hover:bg-accent/90">
            Publish Post
          </button>
          <button type="button" className="bg-transparent border border-muted text-muted px-6 py-2 rounded hover:bg-muted/10">
            Save Draft
          </button>
        </div>
      </form>
    </div>
  );
}
