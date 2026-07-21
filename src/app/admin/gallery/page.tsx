'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { uploadImageAction } from '../../actions/uploadAction';
import { 
  Folder, Image as ImageIcon, Upload, Trash2, Search, 
  Copy, Check, Plus, FolderPlus, Grid, List, Sparkles, Loader2
} from 'lucide-react';

interface MediaItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  caption?: string;
  created_at: string;
}

export default function GalleryManager() {
  const supabase = createClient();

  const [activeFolder, setActiveFolder] = useState<string>('gallery');
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [copiedUrlId, setCopiedUrlId] = useState<string | null>(null);

  // Folder categorizations matching L C Fitness layouts
  const folders = [
    { name: 'Gallery Highlights', value: 'gallery' },
    { name: 'Facilities Overview', value: 'facilities' },
    { name: 'Trainers Profiles', value: 'trainers' },
    { name: 'Hero Slides', value: 'hero' },
    { name: 'Classes Graphics', value: 'classes' },
    { name: 'Logo & Branding', value: 'logo' },
    { name: 'Background Skins', value: 'backgrounds' }
  ];

  // Fetch gallery index from Supabase
  const fetchGallery = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      console.warn('Fallback static indexing: Supabase table client-check failed.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const file = files[0];

    try {
      // Read file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;
        const result = await uploadImageAction(base64, file.name, `/${activeFolder}`);

        if (!result.success || !result.url) {
          alert(`Upload failed: ${result.error}`);
          return;
        }

        // Index in Supabase
        const { error } = await supabase.from('gallery').insert([{
          title: file.name.split('.')[0],
          category: activeFolder,
          image_url: result.url,
          caption: `Uploaded to /${activeFolder}`
        }]);

        if (error) console.warn('Supabase DB indexing failed, but file exists on CDN:', result.url);

        alert('Media uploaded successfully to ImageKit CDN!');
        fetchGallery();
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      alert(`Error during upload flow: ${err.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this image from the gallery index?')) return;

    try {
      const { error } = await supabase.from('gallery').delete().eq('id', id);
      if (error) throw error;

      alert('Item deleted from index.');
      fetchGallery();
    } catch (err: any) {
      alert(`Delete error: ${err.message}`);
    }
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrlId(id);
    setTimeout(() => setCopiedUrlId(null), 2000);
  };

  const filteredItems = items.filter(item => {
    const matchesFolder = item.category === activeFolder;
    const matchesSearch = item.title?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#787866] flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-4 h-4 text-[#4A5300]" />
            <span>CDN Storage Hub</span>
          </span>
          <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
            Media & Gallery Library
          </h2>
        </div>

        {/* Upload Control */}
        <label className="px-6 py-3.5 bg-[#4A5300] hover:bg-[#3d4400] text-white font-body font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer relative disabled:opacity-50">
          {isUploading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#F0FF00]" />
              <span>Uploading to CDN...</span>
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 text-[#F0FF00]" />
              <span>Upload New Media</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            disabled={isUploading}
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Directory Folders Bar */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {folders.map(f => (
          <button
            key={f.value}
            onClick={() => setActiveFolder(f.value)}
            className={`px-4.5 py-2.5 rounded-full text-xs font-body font-extrabold tracking-wider uppercase border whitespace-nowrap transition-all ${
              activeFolder === f.value
                ? 'bg-[#4A5300] text-white border-[#4A5300]'
                : 'bg-[#E5E2DA]/50 text-[#787866] border-[#787866]/20 hover:bg-[#E5E2DA] hover:text-[#1E1E1A]'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Folder className="w-4 h-4" />
              <span>{f.name}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Search Filter bar */}
      <div className="bg-[#E5E2DA] p-4 rounded-2xl border border-[#787866]/20 flex items-center gap-3">
        <Search className="w-5 h-5 text-[#787866]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search media in /${activeFolder}...`}
          className="bg-transparent border-none text-sm font-body text-[#1E1E1A] placeholder-[#787866]/50 focus:outline-hidden flex-1"
        />
      </div>

      {/* Content Grid */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#4A5300]" />
          <span className="text-xs font-body font-bold text-[#787866] uppercase tracking-widest">Accessing Media Catalog...</span>
        </div>
      ) : filteredItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#E5E2DA] border border-[#787866]/20 rounded-2xl overflow-hidden shadow-xs flex flex-col group hover:shadow-md transition-all"
            >
              {/* Image Box */}
              <div className="aspect-square relative overflow-hidden bg-black flex items-center justify-center p-1">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Details & Actions */}
              <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-body font-bold text-[#1E1E1A] line-clamp-1">
                    {item.title}
                  </h5>
                  <span className="text-[10px] text-[#787866] font-body block uppercase mt-0.5">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex gap-2 border-t border-[#787866]/10 pt-3">
                  <button
                    onClick={() => copyToClipboard(item.image_url, item.id)}
                    className="flex-1 py-2 rounded-xl bg-[#EFECE6] border border-[#787866]/30 text-[#1E1E1A] text-[10px] font-body font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all hover:bg-white cursor-pointer"
                  >
                    {copiedUrlId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#4A5300]" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-700 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#E5E2DA] border border-[#787866]/20 border-dashed py-24 rounded-3xl text-center flex flex-col items-center justify-center gap-3">
          <ImageIcon className="w-10 h-10 text-[#787866]" />
          <div>
            <h4 className="text-sm font-body font-bold text-[#1E1E1A] uppercase">Empty Folder</h4>
            <p className="text-xs font-body text-[#787866] mt-1">No media files currently uploaded to /${activeFolder}</p>
          </div>
        </div>
      )}

    </div>
  );
}
