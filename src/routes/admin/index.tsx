import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  getContent, 
  saveContent, 
  getMediaFiles,
  deleteMediaFile
} from "../../lib/cms";
import { 
  Compass, 
  LogOut, 
  Save, 
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Upload, 
  Check, 
  Layers, 
  Eye, 
  Briefcase, 
  MapPin, 
  FileText, 
  MessageSquare, 
  Info,
  ChevronRight,
  HelpCircle,
  Image as ImageIcon,
  Video as VideoIcon,
  Copy,
  RefreshCw
} from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "../../components/ui/card";

export const Route = createFileRoute("/admin/")({
  loader: async () => {
    return await getContent();
  },
  component: AdminDashboard,
});

function AdminDashboard() {
  const navigate = useNavigate();
  const initialData = Route.useLoaderData();
  const [data, setData] = useState(initialData);
  const [publishing, setPublishing] = useState(false);
  const [mediaList, setMediaList] = useState<any[]>([]);
  const [loadingMedia, setLoadingMedia] = useState(false);

  // Standard icons for services dropdown
  const lucideIconsList = ["Map", "Box", "Compass", "Trees", "Ruler", "Building2", "Phone", "Mail", "MapPin", "Sparkles", "CheckCircle2", "Play"];

  const fetchMedia = async () => {
    setLoadingMedia(true);
    try {
      const token = localStorage.getItem("cms_token") || "";
      const list = await getMediaFiles({ data: { token } });
      setMediaList(list);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load uploads folder media list");
    } finally {
      setLoadingMedia(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("cms_token");
    toast.success("Signed out successfully");
    navigate({ to: "/admin/login" });
  };

  const handlePublish = async () => {
    setPublishing(true);
    const token = localStorage.getItem("cms_token") || "";
    try {
      const res = await saveContent({ data: { content: data, token } });
      if (res.success) {
        toast.success("Site changes published successfully!");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to publish changes");
    } finally {
      setPublishing(false);
    }
  };

  // Generic helpers to update deep state
  const setHeroField = (field: string, val: any) => {
    setData((prev: any) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: val,
      },
    }));
  };

  const setAboutField = (field: string, val: any) => {
    setData((prev: any) => ({
      ...prev,
      about: {
        ...prev.about,
        [field]: val,
      },
    }));
  };

  const setContactField = (field: string, val: any) => {
    setData((prev: any) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: val,
      },
    }));
  };

  // Image Upload helper
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem("cms_token") || "";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("token", token);

    const uploadPromise = fetch("/api/upload", {
      method: "POST",
      body: formData,
    }).then(async (res) => {
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Upload failed");
      }
      return res.json();
    });

    toast.promise(uploadPromise, {
      loading: "Uploading image...",
      success: (res) => {
        callback(res.url);
        fetchMedia(); // Refresh media library list
        return "Image uploaded successfully!";
      },
      error: (err) => err?.message || "Failed to upload image.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo/civilsphere-logo.png" alt="CivilSphere Studio Logo" className="h-8 w-8 object-cover rounded-full border border-zinc-200" />
            <span className="font-display text-sm sm:text-lg tracking-tight font-semibold">
              CivilSphere <span className="hidden sm:inline">Studio</span> <span className="text-zinc-500 text-[10px] sm:text-xs uppercase ml-1 sm:ml-2 px-1.5 py-0.5 rounded border border-zinc-200">CMS</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate({ to: "/" })} 
              className="border-zinc-200 bg-white text-zinc-755 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm"
            >
              <Eye className="h-4 w-4 sm:mr-1.5 sm:h-3.5 sm:w-3.5 text-zinc-500" />
              <span className="hidden sm:inline">View Site</span>
            </Button>
            <Button 
              onClick={handlePublish} 
              disabled={publishing}
              size="sm"
              className="bg-zinc-900 text-white hover:bg-zinc-850 shadow-sm"
            >
              <Save className="h-4 w-4 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">{publishing ? "Publishing..." : "Publish Changes"}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleSignOut}
              className="text-zinc-500 hover:bg-zinc-100 hover:text-red-650"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Tabs defaultValue="general" className="w-full flex-1 space-y-6">
          
          {/* Dashboard Tab Bar */}
          <div className="overflow-x-auto pb-1">
            <TabsList className="inline-flex w-max min-w-full justify-start rounded-xl border border-zinc-200 bg-zinc-100 p-1">
              <TabsTrigger value="general" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0">
                <Info className="mr-1.5 h-4 w-4" /> General Page Info
              </TabsTrigger>
              <TabsTrigger value="services" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0">
                <Layers className="mr-1.5 h-4 w-4" /> Services
              </TabsTrigger>
              <TabsTrigger value="projects" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0">
                <Briefcase className="mr-1.5 h-4 w-4" /> Projects
              </TabsTrigger>
              <TabsTrigger value="maps" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0">
                <MapPin className="mr-1.5 h-4 w-4" /> Showcase Maps
              </TabsTrigger>
              <TabsTrigger value="workflow" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0">
                <FileText className="mr-1.5 h-4 w-4" /> Workflow
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0">
                <MessageSquare className="mr-1.5 h-4 w-4" /> Testimonials
              </TabsTrigger>
              <TabsTrigger value="media" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0" onClick={fetchMedia}>
                <ImageIcon className="mr-1.5 h-4 w-4" /> Media Library
              </TabsTrigger>
            </TabsList>
          </div>

          {/* 1. GENERAL TAB */}
          <TabsContent value="general" className="space-y-6 outline-none">
            {/* HERO SECTION */}
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-zinc-900">Hero Section Details</CardTitle>
                <CardDescription className="text-zinc-500">
                  Update the headline parts, subtitles, and background video shown at the very top of the page.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500">Headline Part 1 (Standard)</label>
                    <Input 
                      value={data?.hero?.titlePart1 || ""} 
                      onChange={(e) => setHeroField("titlePart1", e.target.value)}
                      className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-450 focus:ring-0"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500">Headline Part 2 (Gradient Colored)</label>
                    <Input 
                      value={data?.hero?.titlePart2 || ""} 
                      onChange={(e) => setHeroField("titlePart2", e.target.value)}
                      className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-450 focus:ring-0"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-500">Hero Subtitle</label>
                  <Textarea 
                    rows={3}
                    value={data?.hero?.subtitle || ""} 
                    onChange={(e) => setHeroField("subtitle", e.target.value)}
                    className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-450 focus:ring-0"
                  />
                </div>

                {/* SHOWCASE HERO VIDEO BACKGROUND */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-zinc-500">Showcase Hero Background Video</label>
                  <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                    {data?.hero?.videoUrl ? (
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-lg bg-zinc-200 text-zinc-700 shrink-0">
                            <VideoIcon className="h-5 w-5" />
                          </span>
                          <div className="space-y-0.5 min-w-0">
                            <p className="text-xs font-semibold text-zinc-800">Video background active</p>
                            <p className="text-[10px] text-zinc-500 truncate max-w-xs sm:max-w-md md:max-w-xl">{data.hero.videoUrl}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setHeroField("videoUrl", "")}
                          className="border-red-200 text-red-600 bg-white hover:bg-red-50 shrink-0 shadow-sm"
                        >
                          Remove Video
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <p className="text-xs text-zinc-500 font-medium">No video background active. Displaying default static image.</p>
                        <label className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 shadow-sm shrink-0">
                          <Upload className="h-3.5 w-3.5" /> Upload Showcase Video
                          <input 
                            type="file" 
                            accept="video/*" 
                            className="hidden" 
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              
                              const token = localStorage.getItem("cms_token") || "";
                              const formData = new FormData();
                              formData.append("file", file);
                              formData.append("token", token);
                              
                              const uploadPromise = fetch("/api/upload", {
                                method: "POST",
                                body: formData,
                              }).then(async (res) => {
                                if (!res.ok) {
                                  const errData = await res.json();
                                  throw new Error(errData.error || "Upload failed");
                                }
                                return res.json();
                              });
                              
                              toast.promise(uploadPromise, {
                                loading: "Uploading background video...",
                                success: (res) => {
                                  setHeroField("videoUrl", res.url);
                                  fetchMedia(); // Update library
                                  return "Background video uploaded successfully!";
                                },
                                error: (err) => err?.message || "Failed to upload video.",
                              });
                            }}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* HERO BACKGROUND OPACITY CONTROLLER */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold text-zinc-500">Hero Background Opacity</label>
                    <span className="text-xs font-bold text-zinc-700">{data?.hero?.bgOpacity !== undefined ? data.hero.bgOpacity : 75}%</span>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={data?.hero?.bgOpacity !== undefined ? data.hero.bgOpacity : 75}
                      onChange={(e) => setHeroField("bgOpacity", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900"
                    />
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={data?.hero?.bgOpacity !== undefined ? data.hero.bgOpacity : 75}
                      onChange={(e) => {
                        let val = parseInt(e.target.value);
                        if (isNaN(val)) val = 0;
                        if (val > 100) val = 100;
                        if (val < 0) val = 0;
                        setHeroField("bgOpacity", val);
                      }}
                      className="w-20 border-zinc-200 bg-white text-zinc-900 text-xs text-center"
                    />
                  </div>
                </div>
                
                {/* Hero Stats */}
                <div className="space-y-3 pt-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Hero Statistics</label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {data?.hero?.stats?.map((stat: any, index: number) => (
                      <div key={index} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 space-y-2">
                        <Input 
                          placeholder="Value (e.g. 180+)" 
                          value={stat.value} 
                          onChange={(e) => {
                            const newStats = [...data.hero.stats];
                            newStats[index].value = e.target.value;
                            setHeroField("stats", newStats);
                          }}
                          className="border-zinc-200 bg-white text-sm focus:border-zinc-400"
                        />
                        <Input 
                          placeholder="Label (e.g. Projects delivered)" 
                          value={stat.label} 
                          onChange={(e) => {
                            const newStats = [...data.hero.stats];
                            newStats[index].label = e.target.value;
                            setHeroField("stats", newStats);
                          }}
                          className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ABOUT THE STUDIO */}
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-zinc-900">About Studio Details</CardTitle>
                <CardDescription className="text-zinc-500">
                  Update the headline descriptions and point details for the Studio profile section.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-500">About Title</label>
                  <Input 
                    value={data?.about?.title || ""} 
                    onChange={(e) => setAboutField("title", e.target.value)}
                    className="border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-500">About Description</label>
                  <Textarea 
                    rows={4}
                    value={data?.about?.description || ""} 
                    onChange={(e) => setAboutField("description", e.target.value)}
                    className="border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
                  />
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-zinc-500">Studio Highlights Checklist</label>
                  {data?.about?.features?.map((feat: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input 
                        value={feat} 
                        onChange={(e) => {
                          const newFeats = [...data.about.features];
                          newFeats[index] = e.target.value;
                          setAboutField("features", newFeats);
                        }}
                        className="border-zinc-200 bg-white text-sm focus:border-zinc-400"
                      />
                      <Button
                        variant="ghost"
                        onClick={() => {
                          const newFeats = data.about.features.filter((_: any, idx: number) => idx !== index);
                          setAboutField("features", newFeats);
                        }}
                        className="text-zinc-400 hover:text-red-655 hover:bg-zinc-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newFeats = [...(data?.about?.features || []), ""];
                      setAboutField("features", newFeats);
                    }}
                    className="mt-2 border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 shadow-sm"
                  >
                    <Plus className="mr-1 h-3.5 w-3.5 text-zinc-500" /> Add Highlight Point
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CONTACT DETAILS */}
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-zinc-900">Contact Details</CardTitle>
                <CardDescription className="text-zinc-500">
                  Update the address, phone and mail address details referenced in contact form / page footers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500">Email Address</label>
                    <Input 
                      value={data?.contact?.email || ""} 
                      onChange={(e) => setContactField("email", e.target.value)}
                      className="border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500">Phone Number</label>
                    <Input 
                      value={data?.contact?.phone || ""} 
                      onChange={(e) => setContactField("phone", e.target.value)}
                      className="border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500">Physical Address</label>
                    <Input 
                      value={data?.contact?.address || ""} 
                      onChange={(e) => setContactField("address", e.target.value)}
                      className="border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2. SERVICES TAB */}
          <TabsContent value="services" className="space-y-6 outline-none">
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-zinc-900">Services Manager</CardTitle>
                  <CardDescription className="text-zinc-500">
                    Add, edit, rearrange or remove client architectural services card layouts.
                  </CardDescription>
                </div>
                <Button
                  onClick={() => {
                    const newServ = [...(data?.services || []), { icon: "Map", title: "New Service", body: "Description content goes here." }];
                    setData((prev: any) => ({ ...prev, services: newServ }));
                  }}
                  className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm shrink-0"
                  size="sm"
                >
                  <Plus className="mr-1 h-4 w-4" /> Add Service
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {data?.services?.map((service: any, index: number) => (
                    <div key={index} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 space-y-3">
                      {/* Service header with label and controls */}
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60">
                        <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Service #{index + 1}</span>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={index === 0}
                            onClick={() => {
                              const newServ = [...data.services];
                              const temp = newServ[index];
                              newServ[index] = newServ[index - 1];
                              newServ[index - 1] = temp;
                              setData((prev: any) => ({ ...prev, services: newServ }));
                            }}
                            className="h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100"
                            type="button"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={index === data.services.length - 1}
                            onClick={() => {
                              const newServ = [...data.services];
                              const temp = newServ[index];
                              newServ[index] = newServ[index + 1];
                              newServ[index + 1] = temp;
                              setData((prev: any) => ({ ...prev, services: newServ }));
                            }}
                            className="h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100"
                            type="button"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              const newServ = data.services.filter((_: any, idx: number) => idx !== index);
                              setData((prev: any) => ({ ...prev, services: newServ }));
                            }}
                            className="h-7 w-7 text-zinc-400 hover:text-red-600 hover:bg-zinc-100"
                            type="button"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500">Card Icon</label>
                          <select
                            value={service.icon}
                            onChange={(e) => {
                              const newServ = [...data.services];
                              newServ[index].icon = e.target.value;
                              setData((prev: any) => ({ ...prev, services: newServ }));
                            }}
                            className="w-full rounded-lg border border-zinc-200 bg-white py-1.5 px-2.5 text-xs text-zinc-800 outline-none focus:border-zinc-400"
                          >
                            {lucideIconsList.map((ico) => (
                              <option key={ico} value={ico}>{ico}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500">Service Title</label>
                          <Input 
                            value={service.title}
                            onChange={(e) => {
                              const newServ = [...data.services];
                              newServ[index].title = e.target.value;
                              setData((prev: any) => ({ ...prev, services: newServ }));
                            }}
                            className="border-zinc-200 bg-white text-sm focus:border-zinc-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-zinc-500">Description</label>
                        <Textarea 
                          rows={2}
                          value={service.body}
                          onChange={(e) => {
                            const newServ = [...data.services];
                            newServ[index].body = e.target.value;
                            setData((prev: any) => ({ ...prev, services: newServ }));
                          }}
                          className="border-zinc-200 bg-white text-xs focus:border-zinc-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 3. PROJECTS TAB */}
          <TabsContent value="projects" className="space-y-6 outline-none">
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-zinc-900">Projects Portfolio</CardTitle>
                  <CardDescription className="text-zinc-500">
                    Manage the architectural designs displayed inside the main Grid list portfolio.
                  </CardDescription>
                </div>
                <Button
                  onClick={() => {
                    const newProj = [...(data?.projects || []), { img: "/uploads/project-masterplan.jpg", tag: "General", title: "New Project", meta: "Description details" }];
                    setData((prev: any) => ({ ...prev, projects: newProj }));
                  }}
                  className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm shrink-0"
                  size="sm"
                >
                  <Plus className="mr-1 h-4 w-4" /> Add Project
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {data?.projects?.map((project: any, index: number) => (
                    <div key={index} className="relative flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                      
                      {/* Action Header controls */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Project #{index + 1}</span>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={index === 0}
                            onClick={() => {
                              const newProj = [...data.projects];
                              const temp = newProj[index];
                              newProj[index] = newProj[index - 1];
                              newProj[index - 1] = temp;
                              setData((prev: any) => ({ ...prev, projects: newProj }));
                            }}
                            className="h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={index === data.projects.length - 1}
                            onClick={() => {
                              const newProj = [...data.projects];
                              const temp = newProj[index];
                              newProj[index] = newProj[index + 1];
                              newProj[index + 1] = temp;
                              setData((prev: any) => ({ ...prev, projects: newProj }));
                            }}
                            className="h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              const newProj = data.projects.filter((_: any, idx: number) => idx !== index);
                              setData((prev: any) => ({ ...prev, projects: newProj }));
                            }}
                            className="h-7 w-7 text-zinc-400 hover:text-red-655 hover:bg-zinc-100"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>

                      {/* Display / edit fields */}
                      <div className="grid gap-4 md:grid-cols-3">
                        {/* Project Thumbnail Image */}
                        <div className="md:col-span-1 flex flex-col items-center gap-2">
                          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200">
                            <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
                          </div>
                          <label className="group flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm">
                            <Upload className="h-3 w-3 text-zinc-550" /> Upload Image
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(e, (url) => {
                                const newProj = [...data.projects];
                                newProj[index].img = url;
                                setData((prev: any) => ({ ...prev, projects: newProj }));
                              })}
                            />
                          </label>
                        </div>

                        {/* Project texts */}
                        <div className="md:col-span-2 space-y-3">
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-zinc-500">Category Tag</label>
                              <Input 
                                value={project.tag}
                                onChange={(e) => {
                                  const newProj = [...data.projects];
                                  newProj[index].tag = e.target.value;
                                  setData((prev: any) => ({ ...prev, projects: newProj }));
                                }}
                                className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-zinc-500">Title</label>
                              <Input 
                                value={project.title}
                                onChange={(e) => {
                                  const newProj = [...data.projects];
                                  newProj[index].title = e.target.value;
                                  setData((prev: any) => ({ ...prev, projects: newProj }));
                                }}
                                className="border-zinc-200 bg-white text-sm focus:border-zinc-400 font-medium text-zinc-900"
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-zinc-500">Metadata Details (e.g. Dimensions / Phase)</label>
                            <Input 
                              value={project.meta}
                              onChange={(e) => {
                                const newProj = [...data.projects];
                                newProj[index].meta = e.target.value;
                                setData((prev: any) => ({ ...prev, projects: newProj }));
                              }}
                              className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4. SHOWCASE MAPS TAB */}
          <TabsContent value="maps" className="space-y-6 outline-none">
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-zinc-900">Showcase 2D & 3D Maps</CardTitle>
                <CardDescription className="text-zinc-500">
                  Update the maps switcher dataset shown in the "See your land in 2D & 3D" showcase.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* 2D Maps */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    2D Plot Maps
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {data?.maps?.["2d"]?.map((item: any, index: number) => (
                      <div key={index} className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200">
                          <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <label className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm">
                          <Upload className="h-3 w-3 text-zinc-500" /> Replace map image
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleFileUpload(e, (url) => {
                              const new2d = [...data.maps["2d"]];
                              new2d[index].img = url;
                              setData((prev: any) => ({
                                ...prev,
                                maps: { ...prev.maps, "2d": new2d }
                              }));
                            })}
                          />
                        </label>
                        <div className="space-y-2.5">
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-zinc-500">Label Tag</label>
                              <Input 
                                value={item.tag}
                                onChange={(e) => {
                                  const new2d = [...data.maps["2d"]];
                                  new2d[index].tag = e.target.value;
                                  setData((prev: any) => ({
                                    ...prev,
                                    maps: { ...prev.maps, "2d": new2d }
                                  }));
                                }}
                                className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-zinc-500">Title</label>
                              <Input 
                                value={item.title}
                                onChange={(e) => {
                                  const new2d = [...data.maps["2d"]];
                                  new2d[index].title = e.target.value;
                                  setData((prev: any) => ({
                                    ...prev,
                                    maps: { ...prev.maps, "2d": new2d }
                                  }));
                                }}
                                className="border-zinc-200 bg-white text-xs focus:border-zinc-400 font-semibold text-zinc-900"
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-zinc-500">Subtext Details</label>
                            <Input 
                              value={item.meta}
                              onChange={(e) => {
                                const new2d = [...data.maps["2d"]];
                                new2d[index].meta = e.target.value;
                                setData((prev: any) => ({
                                  ...prev,
                                  maps: { ...prev.maps, "2d": new2d }
                                }));
                              }}
                              className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3D Maps */}
                <div className="space-y-4 pt-4 border-t border-zinc-200">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    3D Plot Maps
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {data?.maps?.["3d"]?.map((item: any, index: number) => (
                      <div key={index} className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200">
                          <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <label className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm">
                          <Upload className="h-3 w-3 text-zinc-500" /> Replace map image
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleFileUpload(e, (url) => {
                              const new3d = [...data.maps["3d"]];
                              new3d[index].img = url;
                              setData((prev: any) => ({
                                ...prev,
                                maps: { ...prev.maps, "3d": new3d }
                              }));
                            })}
                          />
                        </label>
                        <div className="space-y-2.5">
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-zinc-500">Label Tag</label>
                              <Input 
                                value={item.tag}
                                onChange={(e) => {
                                  const new3d = [...data.maps["3d"]];
                                  new3d[index].tag = e.target.value;
                                  setData((prev: any) => ({
                                    ...prev,
                                    maps: { ...prev.maps, "3d": new3d }
                                  }));
                                }}
                                className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold text-zinc-500">Title</label>
                              <Input 
                                value={item.title}
                                onChange={(e) => {
                                  const new3d = [...data.maps["3d"]];
                                  new3d[index].title = e.target.value;
                                  setData((prev: any) => ({
                                    ...prev,
                                    maps: { ...prev.maps, "3d": new3d }
                                  }));
                                }}
                                className="border-zinc-200 bg-white text-xs focus:border-zinc-400 font-semibold text-zinc-900"
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-zinc-500">Subtext Details</label>
                            <Input 
                              value={item.meta}
                              onChange={(e) => {
                                const new3d = [...data.maps["3d"]];
                                new3d[index].meta = e.target.value;
                                setData((prev: any) => ({
                                  ...prev,
                                  maps: { ...prev.maps, "3d": new3d }
                                }));
                              }}
                              className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 5. WORKFLOW TAB */}
          <TabsContent value="workflow" className="space-y-6 outline-none">
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-zinc-900">Workflow Steps</CardTitle>
                <CardDescription className="text-zinc-500">
                  Update the description and headers for each of the 4 steps of the design process.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {data?.workflow?.map((step: any, index: number) => (
                    <div key={index} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-2xl text-amber-600 font-bold">{step.step}</span>
                        <Input 
                          placeholder="Step title"
                          value={step.title}
                          onChange={(e) => {
                            const newWork = [...data.workflow];
                            newWork[index].title = e.target.value;
                            setData((prev: any) => ({ ...prev, workflow: newWork }));
                          }}
                          className="border-zinc-200 bg-white text-sm focus:border-zinc-400 font-semibold text-zinc-900"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-zinc-500">Step Details</label>
                        <Textarea 
                          rows={2}
                          value={step.body}
                          onChange={(e) => {
                            const newWork = [...data.workflow];
                            newWork[index].body = e.target.value;
                            setData((prev: any) => ({ ...prev, workflow: newWork }));
                          }}
                          className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-700"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 6. TESTIMONIALS TAB */}
          <TabsContent value="testimonials" className="space-y-6 outline-none">
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-zinc-900">Client Reviews</CardTitle>
                  <CardDescription className="text-zinc-500">
                    Edit quotes and citation details for client recommendations.
                  </CardDescription>
                </div>
                <Button
                  onClick={() => {
                    const newTest = [...(data?.testimonials || []), { quote: "New recommendation quote goes here.", name: "Client Name", role: "Director, Company" }];
                    setData((prev: any) => ({ ...prev, testimonials: newTest }));
                  }}
                  className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm shrink-0"
                  size="sm"
                >
                  <Plus className="mr-1 h-4 w-4" /> Add Testimonial
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {data?.testimonials?.map((t: any, index: number) => (
                    <div key={index} className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-5 space-y-3">
                      
                      {/* Delete button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const newTest = data.testimonials.filter((_: any, idx: number) => idx !== index);
                          setData((prev: any) => ({ ...prev, testimonials: newTest }));
                        }}
                        className="absolute right-4 top-4 h-7 w-7 text-zinc-400 hover:text-red-655 hover:bg-zinc-100"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-zinc-500">Recommendation Quote</label>
                        <Textarea 
                          rows={3}
                          value={t.quote}
                          onChange={(e) => {
                            const newTest = [...data.testimonials];
                            newTest[index].quote = e.target.value;
                            setData((prev: any) => ({ ...prev, testimonials: newTest }));
                          }}
                          className="border-zinc-200 bg-white text-xs focus:border-zinc-400 italic text-zinc-800"
                        />
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500">Client Name</label>
                          <Input 
                            value={t.name}
                            onChange={(e) => {
                              const newTest = [...data.testimonials];
                              newTest[index].name = e.target.value;
                              setData((prev: any) => ({ ...prev, testimonials: newTest }));
                            }}
                            className="border-zinc-200 bg-white text-xs focus:border-zinc-400 font-semibold text-zinc-900"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-zinc-500">Role & Organization</label>
                          <Input 
                            value={t.role}
                            onChange={(e) => {
                              const newTest = [...data.testimonials];
                              newTest[index].role = e.target.value;
                              setData((prev: any) => ({ ...prev, testimonials: newTest }));
                            }}
                            className="border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 7. MEDIA LIBRARY TAB */}
          <TabsContent value="media" className="space-y-6 outline-none">
            <Card className="border-zinc-200 bg-white shadow-sm">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-zinc-900">Media Library</CardTitle>
                  <CardDescription className="text-zinc-500">
                    Upload, manage, and delete image and video assets served on your website. Copy URLs to paste into other dynamic fields.
                  </CardDescription>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={fetchMedia} 
                    disabled={loadingMedia}
                    className="border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 mr-1 ${loadingMedia ? "animate-spin" : ""}`} />
                    Refresh
                  </Button>
                  <label className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-zinc-900 py-1.5 px-3 text-xs font-medium text-white hover:bg-zinc-800 shadow-sm shrink-0">
                    <Upload className="h-3 w-3" /> Upload Media File
                    <input 
                      type="file" 
                      accept="image/*,video/*" 
                      className="hidden" 
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        
                        const token = localStorage.getItem("cms_token") || "";
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("token", token);
                        
                        const uploadPromise = fetch("/api/upload", {
                          method: "POST",
                          body: formData,
                        }).then(async (res) => {
                          if (!res.ok) {
                            const errData = await res.json();
                            throw new Error(errData.error || "Upload failed");
                          }
                          return res.json();
                        });
                        
                        toast.promise(uploadPromise, {
                          loading: "Uploading asset...",
                          success: () => {
                            fetchMedia();
                            return "Asset uploaded to library!";
                          },
                          error: (err) => err?.message || "Failed to upload asset.",
                        });
                      }}
                    />
                  </label>
                </div>
              </CardHeader>
              <CardContent>
                {loadingMedia ? (
                  <div className="flex justify-center py-12">
                    <RefreshCw className="h-8 w-8 animate-spin text-zinc-400" />
                  </div>
                ) : mediaList.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 text-zinc-500">
                    <ImageIcon className="h-12 w-12 text-zinc-300 mb-3" />
                    <p className="text-sm font-semibold">No media uploads found</p>
                    <p className="text-xs text-zinc-400 mt-1">Upload images or videos above to populate your library.</p>
                  </div>
                ) : (
                  <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {mediaList.map((file) => (
                      <div key={file.name} className="group relative rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden flex flex-col justify-between shadow-sm">
                        
                        {/* Thumbnail / Icon preview */}
                        <div className="aspect-square bg-zinc-100 flex items-center justify-center relative overflow-hidden border-b border-zinc-200">
                          {file.isVideo ? (
                            <div className="h-full w-full relative">
                              <video src={file.url} className="h-full w-full object-cover opacity-80" muted preload="metadata" />
                              <span className="absolute top-2 right-2 bg-zinc-900/70 text-white rounded p-0.5 text-[9px] font-bold uppercase tracking-wider">
                                Video
                              </span>
                            </div>
                          ) : file.isImage ? (
                            <img src={file.url} alt={file.name} className="h-full w-full object-cover" />
                          ) : (
                            <FileText className="h-10 w-10 text-zinc-400" />
                          )}

                          {/* Overlay details on hover */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                            <Button
                              variant="secondary"
                              size="icon"
                              onClick={() => {
                                navigator.clipboard.writeText(file.url);
                                toast.success("Copied to clipboard: " + file.url);
                              }}
                              className="h-8 w-8 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 shadow"
                              title="Copy URL"
                            >
                              <Copy className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="icon"
                              onClick={async () => {
                                if (!confirm("Are you sure you want to permanently delete this media file from disk?")) return;
                                
                                const token = localStorage.getItem("cms_token") || "";
                                const delPromise = deleteMediaFile({ data: { filename: file.name, token } });
                                
                                toast.promise(delPromise, {
                                  loading: "Deleting asset...",
                                  success: () => {
                                    fetchMedia();
                                    return "Asset deleted from library!";
                                  },
                                  error: (err) => err.message || "Failed to delete file",
                                });
                              }}
                              className="h-8 w-8 rounded-full bg-red-600 text-white hover:bg-red-700 shadow"
                              title="Delete File"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>

                        {/* Info panel */}
                        <div className="p-2 bg-white text-[10px] space-y-0.5">
                          <p className="font-semibold text-zinc-800 truncate" title={file.name}>
                            {file.name}
                          </p>
                          <div className="flex justify-between text-zinc-500 font-medium">
                            <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                            <span className="capitalize">{file.isVideo ? "Video" : "Image"}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </main>

      {/* Footer copyright */}
      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 bg-white">
        © {new Date().getFullYear()} CivilSphere Studio CMS Panel.
      </footer>
    </div>
  );
}
