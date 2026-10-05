import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Building2,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Download,
  Search,
  Menu,
  X,
  FileText,
  ShieldCheck,
  Briefcase,
  Laptop,
  Cpu,
  Building,
  CreditCard,
  Lock,
  User,
  Clock,
  Sparkles,
  ArrowUpRight,
  Layers,
  HelpCircle,
  Eye
} from 'lucide-react';

import heroCampusImg from './assets/images/hero_ggits_campus_1791184175951.jpg';
import roboticsLabImg from './assets/images/campus_robotics_lab_1791184188815.jpg';
import centralLibraryImg from './assets/images/campus_central_library_1791184200650.jpg';

import {
  DEPARTMENTS_DATA,
  INSTITUTIONAL_METRICS,
  RECRUITERS_DATA,
  INSTITUTIONAL_NOTICES,
  CAMPUS_FACILITIES,
  type Department
} from './data/institutionalData';

export default function App() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active filter tab for academic departments
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'engineering' | 'pharmacy' | 'management'>('all');
  const [deptSearchQuery, setDeptSearchQuery] = useState('');

  // Modals state
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isErpModalOpen, setIsErpModalOpen] = useState(false);
  const [erpRole, setErpRole] = useState<'student' | 'faculty' | 'parent'>('student');
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [virtualTourActiveTab, setVirtualTourActiveTab] = useState<'campus' | 'labs' | 'library'>('campus');

  // Form states
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'B.Tech - Computer Science & Engineering',
    qualification: '12th Standard / PCM',
    percentage: '',
    city: ''
  });
  const [applySubmitted, setApplySubmitted] = useState(false);

  // ERP Login form state
  const [erpForm, setErpForm] = useState({ username: '', password: '' });
  const [erpLoggedIn, setErpLoggedIn] = useState(false);

  // Fee search form
  const [feeEnrollmentId, setFeeEnrollmentId] = useState('');
  const [feeRecordFound, setFeeRecordFound] = useState(false);

  // Filtered departments
  const filteredDepartments = useMemo(() => {
    return DEPARTMENTS_DATA.filter((dept) => {
      const matchesCategory = selectedCategory === 'all' || dept.category === selectedCategory;
      const matchesQuery =
        dept.name.toLowerCase().includes(deptSearchQuery.toLowerCase()) ||
        dept.code.toLowerCase().includes(deptSearchQuery.toLowerCase()) ||
        dept.keySpecializations.some((s) => s.toLowerCase().includes(deptSearchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, deptSearchQuery]);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.name || !applyForm.email || !applyForm.phone) return;
    setApplySubmitted(true);
    setTimeout(() => {
      // simulated save
    }, 400);
  };

  const resetApplyModal = () => {
    setIsApplyModalOpen(false);
    setApplySubmitted(false);
    setApplyForm({
      name: '',
      email: '',
      phone: '',
      program: 'B.Tech - Computer Science & Engineering',
      qualification: '12th Standard / PCM',
      percentage: '',
      city: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-[#D4AF37]/30">
      {/* ========================================================================= */}
      {/* 1. UTILITY TOP BAR & LOGO BAR                                            */}
      {/* ========================================================================= */}
      
      {/* A. Utility Alert & Quick Links Bar */}
      <div className="bg-[#061527] text-slate-200 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Marquee ticker indicator */}
          <div className="flex items-center gap-3 overflow-hidden w-full sm:w-auto">
            <span className="bg-[#D4AF37] text-[#061527] font-bold px-2 py-0.5 text-[10px] tracking-wider uppercase rounded-xs whitespace-nowrap shrink-0">
              Notification
            </span>
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="text-slate-300 hover:text-[#D4AF37] transition-colors truncate text-left text-xs cursor-pointer flex items-center gap-1.5"
            >
              <span className="font-medium text-white">Admissions 2026-2027 Open</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 hover:underline">Apply Online for B.Tech, B.Pharm & MBA</span>
              <ArrowUpRight className="w-3 h-3 text-[#D4AF37] shrink-0" />
            </button>
          </div>

          {/* Quick Institutional Action Anchors */}
          <div className="flex items-center gap-4 text-xs font-medium shrink-0">
            <button
              onClick={() => {
                setErpRole('student');
                setIsErpModalOpen(true);
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-[#D4AF37]" />
              <span>ERP Login</span>
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => {
                setErpRole('student');
                setIsErpModalOpen(true);
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <User className="w-3 h-3 text-[#D4AF37]" />
              <span>Student Portal</span>
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setIsFeeModalOpen(true)}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <CreditCard className="w-3 h-3 text-[#D4AF37]" />
              <span>Fee Payment</span>
            </button>
            <span className="text-slate-700">·</span>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* B. Institutional Brand Emblem Row */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Lockup */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-13 sm:h-13 bg-[#0B2545] rounded-sm flex items-center justify-center text-[#D4AF37] border-2 border-[#D4AF37]/40 shadow-sm shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <a href="https://ggits.org/" target="_blank" rel="noreferrer" className="group">
                  <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-[#0B2545] font-academic group-hover:text-[#D4AF37] transition-colors leading-tight">
                    GYAN GANGA
                  </h1>
                </a>
                <span className="hidden sm:inline-block text-[11px] font-semibold bg-slate-100 text-[#0B2545] px-2 py-0.5 rounded border border-slate-200">
                  ESTD. 2003
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide font-academic">
                INSTITUTE OF TECHNOLOGY & SCIENCES, JABALPUR
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                An Autonomous Institution · Approved by AICTE · Accredited by NBA · Affiliated to RGPV Bhopal
              </p>
            </div>
          </div>

          {/* Right Action: Apply Now High-Contrast CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B89222] text-[#061527] font-bold px-5 py-2.5 rounded-sm text-sm transition-all duration-150 shadow-sm hover:shadow active:translate-y-px whitespace-nowrap cursor-pointer"
            >
              <span>Apply Now 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-slate-700 hover:text-[#0B2545] rounded-sm hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. NAVIGATION LINKS BAR (Sticky Desktop Setup)                            */}
      {/* ========================================================================= */}
      <nav className="sticky top-0 z-40 bg-[#0B2545] text-white shadow-md border-t border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between h-12">
            <div className="flex items-center gap-1 xl:gap-2">
              <a
                href="#home"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                Home
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
              <a
                href="#about"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                About Us
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
              <a
                href="#academics"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                Academics
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
              <a
                href="#admissions"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                Admissions
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
              <a
                href="#placements"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                Placements
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
              <a
                href="#campus"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                Campus Life
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
              <a
                href="#research"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                Research & Labs
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
              <a
                href="#contact"
                className="px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap"
              >
                Contact Us
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            </div>

            {/* Quick Accreditation Badges */}
            <div className="flex items-center gap-3 text-[11px] text-slate-300 font-medium">
              <span className="flex items-center gap-1 text-[#D4AF37]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>UGC Autonomous</span>
              </span>
              <span className="text-slate-600">|</span>
              <span>NBA Accredited</span>
              <span className="text-slate-600">|</span>
              <span>NAAC Accredited</span>
            </div>
          </div>

          {/* Mobile Collapsible Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-700/80 space-y-1">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                About Us
              </a>
              <a
                href="#academics"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                Academics
              </a>
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                Admissions
              </a>
              <a
                href="#placements"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                Placements
              </a>
              <a
                href="#campus"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                Campus Life
              </a>
              <a
                href="#research"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                Research
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/50 rounded"
              >
                Contact Us
              </a>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsApplyModalOpen(true);
                  }}
                  className="w-full bg-[#D4AF37] text-[#061527] font-bold py-2.5 rounded-sm text-sm"
                >
                  Apply Online 2026-27
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. DYNAMIC HERO COMPONENT                                                 */}
      {/* ========================================================================= */}
      <section id="home" className="relative bg-[#061527] text-white overflow-hidden min-h-[560px] lg:min-h-[620px] flex items-center">
        {/* Backdrop Campus Image with High-Contrast Scrim */}
        <div className="absolute inset-0">
          <img
            src={heroCampusImg}
            alt="Gyan Ganga Institute of Technology & Sciences Campus, Jabalpur"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Measured multi-stop scrim as per section 1.F & 3.E */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061527]/95 via-[#0B2545]/85 to-[#061527]/75" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#061527]/40 to-[#061527]/90" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Accreditation trust badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
              <span className="border-l-2 border-[#D4AF37] pl-2 text-[#D4AF37] font-semibold tracking-wider uppercase text-[11px]">
                Autonomous Engineering & Management
              </span>
              <span className="text-slate-500">·</span>
              <span>NBA Accredited Programs</span>
              <span className="text-slate-500">·</span>
              <span>AICTE Approved</span>
              <span className="text-slate-500">·</span>
              <span>RGPV Affiliated</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-academic tracking-tight leading-[1.1] text-white">
              Empowering Future Technology Leaders &amp; Innovators
            </h1>

            {/* Accent Sub-headline */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              One of the Premier Private Technical and Management Institutions in Central India.
              Nurturing engineering excellence, disruptive research, and global leadership since 2003.
            </p>

            {/* Dual Call-to-Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#academics"
                className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#B89222] text-[#061527] font-bold px-6 py-3.5 rounded-sm text-sm sm:text-base transition-all duration-150 shadow-md hover:shadow-lg active:translate-y-px whitespace-nowrap cursor-pointer"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsVirtualTourOpen(true)}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-sm text-sm sm:text-base border border-white/30 backdrop-blur-xs transition-all duration-150 active:translate-y-px whitespace-nowrap cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#D4AF37]" />
                <span>Take a Virtual Tour</span>
              </button>
            </div>

            {/* Quick Accreditation Keypoints */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-700/60 text-xs text-slate-300">
              <div>
                <p className="text-[#D4AF37] font-bold">UGC Autonomous</p>
                <p className="text-slate-400 text-[11px]">Curriculum Freedom</p>
              </div>
              <div>
                <p className="text-[#D4AF37] font-bold">Choice-Based Credit</p>
                <p className="text-slate-400 text-[11px]">Flexible Electives</p>
              </div>
              <div>
                <p className="text-[#D4AF37] font-bold">120+ Corporates</p>
                <p className="text-slate-400 text-[11px]">Campus Recruitment</p>
              </div>
              <div>
                <p className="text-[#D4AF37] font-bold">45 Acre Campus</p>
                <p className="text-slate-400 text-[11px]">Bargi Hills, Jabalpur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. VITAL METRICS GRID (Counter Blocks)                                    */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-slate-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTIONAL_METRICS.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-[#F8FAFC] border border-slate-200/80 rounded-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-[#0B2545] uppercase tracking-wider">
                    {metric.badge}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-academic text-[#0B2545] tracking-tight tabular-nums group-hover:text-[#B89222] transition-colors">
                  {metric.value}
                </div>
                <h3 className="text-sm font-semibold text-slate-800 mt-2 font-academic">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.1 INSTITUTIONAL NOTICES & UPDATES TICKER                                */}
      {/* ========================================================================= */}
      <section className="bg-slate-100/80 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545] font-academic">
                Official Announcements:
              </span>
            </div>

            <div className="flex-1 overflow-hidden w-full">
              <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
                {INSTITUTIONAL_NOTICES.map((notice) => (
                  <div
                    key={notice.id}
                    className="flex items-center gap-2 text-xs text-slate-700 whitespace-nowrap hover:text-[#0B2545] cursor-pointer"
                    onClick={() => setIsApplyModalOpen(true)}
                  >
                    <span className="font-semibold text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">
                      {notice.category}
                    </span>
                    <span className="truncate max-w-md">{notice.title}</span>
                    <span className="text-slate-400 text-[11px] font-mono">({notice.date})</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="text-xs font-semibold text-[#0B2545] hover:text-[#D4AF37] flex items-center gap-1 shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span>View Circulars</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT US & AUTONOMOUS ADVANTAGE                                            */}
      {/* ========================================================================= */}
      <section id="about" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89222]">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Autonomous Excellence · Jabalpur</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-academic text-[#0B2545] tracking-tight leading-tight">
                Two Decades of Academic Distinction and Technological Innovation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Established in 2003 under the aegis of the Shri Gyan Ganga Educational Trust, GGITS has emerged
                as Central India's premier technical autonomous powerhouse. Situated on a serene 45-acre campus
                near Tilwara Ghat, Bargi Hills, Jabalpur, the institute has pioneered industry-integrated curricula,
                state-of-the-art research centers, and sustained record placements with leading global Fortune 500 corporations.
              </p>

              {/* 3 Pillars of Autonomous Advantage */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm">
                  <Cpu className="w-5 h-5 text-[#0B2545] mb-2" />
                  <h3 className="font-semibold text-slate-900 text-sm font-academic">Curriculum Agility</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Industry-vetted syllabus updated annually with AI, Cloud, and IoT specializations.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm">
                  <Layers className="w-5 h-5 text-[#0B2545] mb-2" />
                  <h3 className="font-semibold text-slate-900 text-sm font-academic">CBCS Credit System</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Interdisciplinary minors, honors tracks, and self-paced elective courses.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm">
                  <ShieldCheck className="w-5 h-5 text-[#0B2545] mb-2" />
                  <h3 className="font-semibold text-slate-900 text-sm font-academic">Autonomous Exams</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Prompt academic calendars, timely evaluations, and globally verified transcripts.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsVirtualTourOpen(true)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B2545] hover:text-[#B89222] transition-colors cursor-pointer"
                >
                  <span>Explore Campus Laboratories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={roboticsLabImg}
                  alt="Students working in advanced technology robotics lab at GGITS"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/90 via-[#061527]/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    Research Spotlight
                  </span>
                  <h3 className="text-lg font-bold text-white font-academic mt-1">
                    Advanced Robotics &amp; AI Center
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Equipped with high-precision robotic manipulators, IoT sensors, and computer vision systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ACADEMIC & DEPARTMENTS HUB                                            */}
      {/* ========================================================================= */}
      <section id="academics" className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89222] mb-1">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Curriculum &amp; Disciplines</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-academic text-[#0B2545] tracking-tight">
                Academic &amp; Departments Hub
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mt-1">
                Comprehensive degree programs in Engineering &amp; Technology, Pharmaceutical Sciences, and
                Postgraduate Management designed to excel in industry standards.
              </p>
            </div>

            {/* Department Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search programs or skills..."
                value={deptSearchQuery}
                onChange={(e) => setDeptSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
              />
              {deptSearchQuery && (
                <button
                  onClick={() => setDeptSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0B2545] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Disciplines ({DEPARTMENTS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('engineering')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
                selectedCategory === 'engineering'
                  ? 'bg-[#0B2545] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Engineering &amp; Technology (8)
            </button>
            <button
              onClick={() => setSelectedCategory('pharmacy')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
                selectedCategory === 'pharmacy'
                  ? 'bg-[#0B2545] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Pharmacy (2)
            </button>
            <button
              onClick={() => setSelectedCategory('management')}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all cursor-pointer ${
                selectedCategory === 'management'
                  ? 'bg-[#0B2545] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Management &amp; PG (2)
            </button>
          </div>

          {/* Department Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                onClick={() => setSelectedDepartment(dept)}
                className="bg-white border border-slate-200/90 rounded-sm p-6 hover:shadow-lg hover:border-[#D4AF37] transition-all duration-200 flex flex-col justify-between group cursor-pointer relative"
              >
                <div>
                  {/* Top Code & Duration bar */}
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-bold text-[#0B2545] tracking-wider uppercase font-mono">
                      {dept.code}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                      <span>{dept.duration}</span>
                      <span>·</span>
                      <span className="font-medium text-slate-700">{dept.intake} Seats</span>
                    </div>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-base sm:text-lg font-bold font-academic text-slate-900 group-hover:text-[#0B2545] transition-colors leading-snug">
                    {dept.name}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {dept.degree} {dept.accredited && <span className="text-[#B89222]">· NBA Accredited</span>}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {dept.description}
                  </p>

                  {/* Key Specializations Preview */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Key Competencies:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dept.keySpecializations.slice(0, 3).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {spec}
                        </span>
                      ))}
                      {dept.keySpecializations.length > 3 && (
                        <span className="text-[11px] text-slate-400 py-0.5">
                          +{dept.keySpecializations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Arrow Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B2545] group-hover:text-[#D4AF37] transition-colors">
                  <span>View Curriculum &amp; Labs</span>
                  <div className="w-7 h-7 rounded-sm bg-slate-100 group-hover:bg-[#0B2545] group-hover:text-[#D4AF37] flex items-center justify-center transition-all duration-150 transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDepartments.length === 0 && (
            <div className="bg-white p-12 text-center border border-slate-200 rounded-sm">
              <Search className="w-8 h-8 mx-auto text-slate-400 mb-3" />
              <h3 className="text-base font-bold text-slate-800">No programs found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try adjusting your search criteria or switch back to "All Disciplines".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setDeptSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-[#0B2545] text-white text-xs font-semibold rounded-sm cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PLACEMENT & RECRUITER SECTION                                          */}
      {/* ========================================================================= */}
      <section id="placements" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89222] mb-1">
              <Briefcase className="w-4 h-4 text-[#D4AF37]" />
              <span>Career &amp; Corporate Relations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-academic text-[#0B2545] tracking-tight">
              Placement &amp; Recruiter Ecosystem
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              The Training &amp; Placement Cell at GGITS bridges academic rigor with corporate leadership.
              Over 120+ dream and super dream hiring partners recruit each season.
            </p>
          </div>

          {/* Placement Highlight Banner */}
          <div className="bg-[#0B2545] text-white rounded-sm p-6 sm:p-8 mb-12 shadow-sm border border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/80">
              <div className="pt-3 md:pt-0">
                <span className="text-xs text-slate-300 uppercase tracking-wider">Highest Package</span>
                <div className="text-2xl sm:text-3xl font-bold font-academic text-[#D4AF37] mt-1 tabular-nums">
                  65+ LPA
                </div>
                <span className="text-[11px] text-slate-400">International / Super Dream</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-xs text-slate-300 uppercase tracking-wider">Average Package</span>
                <div className="text-2xl sm:text-3xl font-bold font-academic text-white mt-1 tabular-nums">
                  7.2 LPA
                </div>
                <span className="text-[11px] text-slate-400">Circuital &amp; Tech Branches</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-xs text-slate-300 uppercase tracking-wider">Annual Offers</span>
                <div className="text-2xl sm:text-3xl font-bold font-academic text-[#D4AF37] mt-1 tabular-nums">
                  1500+
                </div>
                <span className="text-[11px] text-slate-400">Multi-Offer Opportunities</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-xs text-slate-300 uppercase tracking-wider">Recruiting Partners</span>
                <div className="text-2xl sm:text-3xl font-bold font-academic text-white mt-1 tabular-nums">
                  120+
                </div>
                <span className="text-[11px] text-slate-400">Fortune 500 &amp; Tech Giants</span>
              </div>
            </div>
          </div>

          {/* Major Hiring Entities Grid */}
          <div className="mb-10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center font-mono">
              Key Corporate Recruiters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {RECRUITERS_DATA.map((recruiter, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-slate-200/90 rounded-sm p-4 text-center hover:border-[#D4AF37] hover:bg-white transition-all duration-150 flex flex-col justify-center items-center h-24"
                >
                  <span className="font-bold text-base font-academic text-[#0B2545] tracking-wide">
                    {recruiter.logoText}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 mt-1 truncate max-w-full">
                    {recruiter.name}
                  </span>
                  <span className="text-[10px] text-[#B89222] font-mono mt-0.5">
                    {recruiter.packageTier}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Placement Cell Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2545] shrink-0 font-bold">
                01
              </div>
              <div>
                <h4 className="text-sm font-bold font-academic text-slate-900">Pre-Placement Training (PPT)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Rigorous 300+ hours of coding bootcamps in Data Structures, Algorithms, System Design, and Full Stack development.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2545] shrink-0 font-bold">
                02
              </div>
              <div>
                <h4 className="text-sm font-bold font-academic text-slate-900">Corporate Mock GDs &amp; Panels</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  One-on-one mock interview sessions conducted with senior technical leads and alumni working in top product companies.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2545] shrink-0 font-bold">
                03
              </div>
              <div>
                <h4 className="text-sm font-bold font-academic text-slate-900">Industry Internship Alliances</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Formal MoUs for semester-long paid internships converting directly to high-CTC pre-placement offers (PPOs).
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-sm text-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Download Placement Brochure 2025-26 (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CAMPUS LIFE & FACILITIES SPOTLIGHT                                      */}
      {/* ========================================================================= */}
      <section id="campus" className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89222] mb-1">
                <Building className="w-4 h-4 text-[#D4AF37]" />
                <span>Life At GGITS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-academic text-[#0B2545] tracking-tight">
                World-Class Campus Infrastructure
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mt-1">
                A vibrant 45-acre ecosystem complete with modern high-speed compute clusters, extensive central libraries,
                innovation hubs, and rich athletic facilities.
              </p>
            </div>
            <button
              onClick={() => setIsVirtualTourOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-[#0B2545] hover:text-[#B89222] border border-slate-200 px-4 py-2 text-xs font-bold rounded-sm shadow-xs transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Launch 360° Virtual Campus Tour</span>
            </button>
          </div>

          {/* Two-Column Feature Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Feature 1: Central Library */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-xs group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={centralLibraryImg}
                  alt="Central Learning Resource Center at GGITS"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#061527]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-xs">
                  85,000+ Volumes · 24/7 Digital Hub
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-academic text-[#0B2545]">
                  Central Learning Resource Center
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Three-story automated repository housing comprehensive collections of IEEE, Springer, and ACM digital libraries,
                  alongside quiet scholar zones, multimedia research terminals, and DELNET inter-library borrowing networks.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Open: 8:00 AM – 9:00 PM</span>
                  <span className="font-semibold text-[#0B2545]">RFID Integrated Checkouts</span>
                </div>
              </div>
            </div>

            {/* Feature 2: Robotics & R&D Center */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-xs group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={roboticsLabImg}
                  alt="Robotics & Advanced Computing Center"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#061527]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-xs">
                  NVIDIA AI &amp; Robotics Cluster
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-academic text-[#0B2545]">
                  Centre of Excellence in AI &amp; Robotics
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Interdisciplinary research center featuring industrial 6-axis manipulator arms, high-performance NVIDIA tensor GPU
                  servers, embedded drone testbeds, and an IoT sensor fabrication suite.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>AICTE Sponsored Project Hub</span>
                  <span className="font-semibold text-[#0B2545]">24 Student Patents Filed</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Extra Facilities Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAMPUS_FACILITIES.map((facility) => (
              <div key={facility.id} className="p-4 bg-white border border-slate-200 rounded-sm">
                <span className="text-[10px] font-bold uppercase text-slate-400 font-mono tracking-wider">
                  {facility.category}
                </span>
                <h4 className="text-sm font-bold font-academic text-slate-900 mt-1">
                  {facility.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {facility.description}
                </p>
                <div className="mt-3 text-[11px] font-semibold text-[#B89222]">
                  {facility.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ADMISSIONS 2026-27 FUNNEL & ENROLLMENT ROADMAP                         */}
      {/* ========================================================================= */}
      <section id="admissions" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Roadmap Process */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B89222]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Admissions 2026-2027</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-academic text-[#0B2545] tracking-tight">
                Your Pathway to Technical Leadership Starts Here
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Admissions for Bachelor of Technology (B.Tech), Bachelor of Pharmacy (B.Pharm), MBA, and MCA
                for the academic session 2026-27 are now open under Autonomous regulations.
              </p>

              {/* 4-Step Process Flow */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-sm bg-[#0B2545] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-academic text-slate-900">Online Registration</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Submit applicant details and select preferred degree tracks through our official admission portal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-sm bg-[#0B2545] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-academic text-slate-900">Counseling &amp; Merit Evaluation</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Eligible scores in JEE Mains, MP-DTE counseling, or qualifying 12th board examinations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-sm bg-[#0B2545] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-academic text-slate-900">Provisional Seat Allocation</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Receive official seat allotment letter and merit scholarship confirmation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-sm bg-[#0B2545] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-academic text-slate-900">Document Verification &amp; Induction</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Campus orientation, hostel allotment, and curriculum syllabus handbook issuance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Admissions Helpline Contact Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm text-xs space-y-1">
                <p className="font-semibold text-slate-800">Direct Admissions Cell Helpline:</p>
                <p className="text-slate-600">Telephone: +91 761 4070000 / +91 761 4070003</p>
                <p className="text-slate-600">Email: admissions@ggits.org · Office: Admin Block, GGITS Campus</p>
              </div>
            </div>

            {/* Right Interactive Quick Application / Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#061527] text-white p-6 sm:p-8 rounded-sm shadow-md border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                      Direct Application Form
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-academic text-white">
                      Admissions Inquiry 2026-27
                    </h3>
                  </div>
                  <span className="text-xs font-semibold bg-[#D4AF37]/20 text-[#D4AF37] px-2.5 py-1 rounded border border-[#D4AF37]/30">
                    Session 2026
                  </span>
                </div>

                {applySubmitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 p-6 rounded-sm text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white font-academic">Application Received!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Thank you, <strong className="text-white">{applyForm.name}</strong>. Your provisional inquiry for{' '}
                      <strong className="text-[#D4AF37]">{applyForm.program}</strong> has been logged.
                      Our Admissions Officer will reach out at <strong>{applyForm.phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setApplySubmitted(false)}
                      className="mt-3 text-xs text-[#D4AF37] underline hover:text-white cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Full Applicant Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aryan Sharma"
                        value={applyForm.name}
                        onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="aryan@example.com"
                          value={applyForm.email}
                          onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-medium mb-1">Mobile / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={applyForm.phone}
                          onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Select Program of Interest *</label>
                      <select
                        value={applyForm.program}
                        onChange={(e) => setApplyForm({ ...applyForm, program: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="B.Tech - Computer Science & Engineering">B.Tech - Computer Science &amp; Engineering</option>
                        <option value="B.Tech - Artificial Intelligence & Machine Learning">B.Tech - Artificial Intelligence &amp; ML</option>
                        <option value="B.Tech - Data Science">B.Tech - Data Science</option>
                        <option value="B.Tech - IoT & Cyber Security">B.Tech - IoT &amp; Cyber Security</option>
                        <option value="B.Tech - Electronics & Communication">B.Tech - Electronics &amp; Communication</option>
                        <option value="B.Tech - Electrical & Electronics">B.Tech - Electrical &amp; Electronics</option>
                        <option value="B.Tech - Mechanical Engineering">B.Tech - Mechanical Engineering</option>
                        <option value="B.Tech - Civil Engineering">B.Tech - Civil Engineering</option>
                        <option value="B.Pharm - Bachelor of Pharmacy">B.Pharm - Bachelor of Pharmacy</option>
                        <option value="D.Pharm - Diploma in Pharmacy">D.Pharm - Diploma in Pharmacy</option>
                        <option value="MBA - Master of Business Administration">MBA - Master of Business Administration</option>
                        <option value="MCA - Master of Computer Applications">MCA - Master of Computer Applications</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-medium mb-1">12th / Grad Percentage</label>
                        <input
                          type="text"
                          placeholder="e.g. 88.5%"
                          value={applyForm.percentage}
                          onChange={(e) => setApplyForm({ ...applyForm, percentage: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-medium mb-1">City &amp; State</label>
                        <input
                          type="text"
                          placeholder="e.g. Jabalpur, MP"
                          value={applyForm.city}
                          onChange={(e) => setApplyForm({ ...applyForm, city: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D4AF37] hover:bg-[#B89222] text-[#061527] font-bold py-3 rounded-sm text-sm transition-all duration-150 shadow-sm cursor-pointer mt-2"
                    >
                      Submit Admission Registration
                    </button>
                    <p className="text-[11px] text-slate-400 text-center">
                      Official portal encryption enabled. No fee is required for preliminary inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. COMPREHENSIVE INSTITUTIONAL FOOTER                                     */}
      {/* ========================================================================= */}
      <footer id="contact" className="bg-[#061527] text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Core Institutional Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0B2545] rounded-sm flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/40 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white font-academic tracking-wide text-base">
                    GGITS JABALPUR
                  </h3>
                  <span className="text-[11px] text-slate-400">Autonomous Institution</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gyan Ganga Institute of Technology and Sciences is Central India’s vanguard autonomous institute
                dedicated to world-class technical education, research integrity, and student career empowerment.
              </p>
              <div className="space-y-1 text-xs text-slate-300 pt-1">
                <p>· Approved by AICTE, New Delhi</p>
                <p>· Accredited by NBA (National Board of Accreditation)</p>
                <p>· Affiliated to RGPV, Bhopal</p>
                <p>· Approved by Pharmacy Council of India (PCI)</p>
              </div>
              <div className="pt-2">
                <a
                  href="https://ggits.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Official Website: ggits.org</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links & Disclosures */}
            <div>
              <h3 className="text-sm font-bold font-academic text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Statutory &amp; Academic Links
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#about" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>AICTE Mandatory Disclosure</span>
                  </a>
                </li>
                <li>
                  <a href="#academics" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>NIRF Institutional Portal</span>
                  </a>
                </li>
                <li>
                  <a href="#academics" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>Internal Quality Assurance Cell (IQAC)</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>Anti-Ragging Committee &amp; Squad</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>Grievance Redressal Portal</span>
                  </a>
                </li>
                <li>
                  <a href="#campus" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>Autonomous Examination Ordinances</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsFeeModalOpen(true)}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>Online Fee Payment Gateway</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Matrix */}
            <div>
              <h3 className="text-sm font-bold font-academic text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Campus Location &amp; Reach
              </h3>
              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Gyan Ganga Campus:</strong>
                    <br />
                    P.O. Tilwara Ghat, Near Bargi Hills,
                    <br />
                    Jabalpur, Madhya Pradesh 482003, India
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href="mailto:erp@ggits.org" className="hover:text-white transition-colors">
                    erp@ggits.org | admissions@ggits.org
                  </a>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>+91 761 4070000 / +91 761 4070003</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Administrative Office: 9:00 AM - 5:30 PM (Mon-Sat)</span>
                </div>
              </div>
            </div>

            {/* Column 4: Quick Portals & Helpdesk */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold font-academic text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Student &amp; Faculty Access
              </h3>
              <p className="text-xs text-slate-400">
                Access your personalized academic calendar, internal marks, attendance, and hall tickets.
              </p>
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    setErpRole('student');
                    setIsErpModalOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 rounded-sm flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Student ERP Portal</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => {
                    setErpRole('faculty');
                    setIsErpModalOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 rounded-sm flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Faculty &amp; Staff Login</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button
                  onClick={() => setIsFeeModalOpen(true)}
                  className="w-full text-left px-3 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 rounded-sm flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Quick Fee Deposit</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Wrapper */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              © {new Date().getFullYear()} Gyan Ganga Institute of Technology &amp; Sciences (GGITS), Jabalpur. All Rights Reserved.
            </p>
            <p className="flex items-center gap-2">
              <span>An Autonomous Institution</span>
              <span>·</span>
              <a href="https://ggits.org/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                https://ggits.org/
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL: DEPARTMENT DETAILS & CURRICULUM DRAWER                            */}
      {/* ========================================================================= */}
      {selectedDepartment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-sm shadow-xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#0B2545] text-white p-5 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-mono uppercase font-bold">
                  <span>{selectedDepartment.code}</span>
                  <span>·</span>
                  <span>{selectedDepartment.degree}</span>
                </div>
                <h3 className="text-xl font-bold font-academic text-white mt-1">
                  {selectedDepartment.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Duration: {selectedDepartment.duration} · Annual Intake: {selectedDepartment.intake} seats
                </p>
              </div>
              <button
                onClick={() => setSelectedDepartment(null)}
                className="text-slate-400 hover:text-white p-1 rounded-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto text-xs text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 uppercase font-academic tracking-wide mb-1 text-xs">
                  Program Overview
                </h4>
                <p className="leading-relaxed text-slate-600 text-sm">
                  {selectedDepartment.description}
                </p>
                <div className="mt-2 text-xs font-semibold text-[#B89222] bg-amber-50 p-2.5 rounded border border-amber-200">
                  {selectedDepartment.highlight}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase font-academic tracking-wide mb-2 text-xs">
                  Key Curriculum Pillars &amp; Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDepartment.keySpecializations.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="font-medium text-slate-800">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase font-academic tracking-wide mb-2 text-xs">
                  Advanced Laboratory Facilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDepartment.labs.map((lab, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded">
                      <Laptop className="w-4 h-4 text-[#0B2545] shrink-0" />
                      <span className="font-medium text-slate-800">{lab}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase font-academic tracking-wide mb-2 text-xs">
                  Target Career Profiles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDepartment.careerProspects.map((career, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 text-[#0B2545] font-semibold rounded text-xs border border-slate-200"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedDepartment(null)}
                className="px-4 py-2 border border-slate-300 rounded text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setApplyForm((prev) => ({ ...prev, program: selectedDepartment.name }));
                  setSelectedDepartment(null);
                  setIsApplyModalOpen(true);
                }}
                className="px-5 py-2 bg-[#D4AF37] hover:bg-[#B89222] text-[#061527] font-bold rounded text-xs cursor-pointer shadow-xs"
              >
                Inquire for this Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: APPLY NOW / ADMISSIONS MODAL                                       */}
      {/* ========================================================================= */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-sm shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  Admissions 2026-2027
                </span>
                <h3 className="text-lg font-bold font-academic text-white">
                  GGITS Application Portal
                </h3>
              </div>
              <button
                onClick={resetApplyModal}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {applySubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold font-academic text-[#0B2545]">
                    Inquiry Successfully Registered
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Your details have been routed to the Admissions Dean office. You will receive an SMS and email
                    with the full prospectus and scholarship criteria.
                  </p>
                  <button
                    onClick={resetApplyModal}
                    className="mt-4 px-6 py-2 bg-[#0B2545] text-white text-xs font-semibold rounded cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Full Applicant Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="applicant@gmail.com"
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Program *</label>
                    <select
                      value={applyForm.program}
                      onChange={(e) => setApplyForm({ ...applyForm, program: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                    >
                      <option value="B.Tech - Computer Science & Engineering">B.Tech - Computer Science &amp; Engineering</option>
                      <option value="B.Tech - Artificial Intelligence & Machine Learning">B.Tech - AI &amp; Machine Learning</option>
                      <option value="B.Tech - Data Science">B.Tech - Data Science</option>
                      <option value="B.Tech - IoT & Cyber Security">B.Tech - IoT &amp; Cyber Security</option>
                      <option value="B.Tech - Electronics & Communication">B.Tech - Electronics &amp; Communication</option>
                      <option value="B.Tech - Mechanical Engineering">B.Tech - Mechanical Engineering</option>
                      <option value="B.Pharm - Bachelor of Pharmacy">B.Pharm - Bachelor of Pharmacy</option>
                      <option value="MBA - Master of Business Administration">MBA - Master of Business Administration</option>
                      <option value="MCA - Master of Computer Applications">MCA - Master of Computer Applications</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Latest Score / %</label>
                      <input
                        type="text"
                        placeholder="e.g. 84%"
                        value={applyForm.percentage}
                        onChange={(e) => setApplyForm({ ...applyForm, percentage: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Current City</label>
                      <input
                        type="text"
                        placeholder="e.g. Jabalpur"
                        value={applyForm.city}
                        onChange={(e) => setApplyForm({ ...applyForm, city: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#D4AF37] hover:bg-[#B89222] text-[#061527] font-bold rounded text-sm transition-all duration-150 cursor-pointer shadow-xs mt-2"
                  >
                    Submit Application Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: CAMPUS VIRTUAL TOUR                                                */}
      {/* ========================================================================= */}
      {isVirtualTourOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-[#061527] text-white w-full max-w-4xl rounded-sm shadow-2xl border border-slate-700 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  Campus Panorama Preview
                </span>
                <h3 className="text-lg font-bold font-academic text-white">
                  GGITS Interactive Virtual Tour
                </h3>
              </div>
              <button
                onClick={() => setIsVirtualTourOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tour Subtabs */}
            <div className="flex border-b border-slate-800 bg-[#0B2545] px-4 gap-2 text-xs">
              <button
                onClick={() => setVirtualTourActiveTab('campus')}
                className={`py-3 px-3 font-semibold border-b-2 transition-colors cursor-pointer ${
                  virtualTourActiveTab === 'campus'
                    ? 'border-[#D4AF37] text-[#D4AF37]'
                    : 'border-transparent text-slate-300 hover:text-white'
                }`}
              >
                Main Campus Grounds
              </button>
              <button
                onClick={() => setVirtualTourActiveTab('labs')}
                className={`py-3 px-3 font-semibold border-b-2 transition-colors cursor-pointer ${
                  virtualTourActiveTab === 'labs'
                    ? 'border-[#D4AF37] text-[#D4AF37]'
                    : 'border-transparent text-slate-300 hover:text-white'
                }`}
              >
                AI &amp; Robotics Research Hub
              </button>
              <button
                onClick={() => setVirtualTourActiveTab('library')}
                className={`py-3 px-3 font-semibold border-b-2 transition-colors cursor-pointer ${
                  virtualTourActiveTab === 'library'
                    ? 'border-[#D4AF37] text-[#D4AF37]'
                    : 'border-transparent text-slate-300 hover:text-white'
                }`}
              >
                Central Learning Resource Center
              </button>
            </div>

            {/* Tour Viewer Area */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="relative rounded overflow-hidden h-72 sm:h-96 border border-slate-800">
                <img
                  src={
                    virtualTourActiveTab === 'campus'
                      ? heroCampusImg
                      : virtualTourActiveTab === 'labs'
                      ? roboticsLabImg
                      : centralLibraryImg
                  }
                  alt="Virtual Campus View"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#061527]/90 backdrop-blur-xs p-4 rounded border border-slate-700/80">
                  <h4 className="text-sm font-bold font-academic text-[#D4AF37]">
                    {virtualTourActiveTab === 'campus' && 'Main Academic Quadrangle & Administrative Atrium'}
                    {virtualTourActiveTab === 'labs' && 'Advanced Robotics & Cognitive Systems Research Laboratory'}
                    {virtualTourActiveTab === 'library' && 'Central Library Digital Learning Commons'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {virtualTourActiveTab === 'campus' &&
                      'Spanning 45 verdant acres in Bargi Hills, Jabalpur with Wi-Fi enabled collegiate blocks, sports pavilion, and cafeteria.'}
                    {virtualTourActiveTab === 'labs' &&
                      'Equipped with 6-axis industrial robotic arms, high-density GPU computing clusters, and real-time sensor simulators.'}
                    {virtualTourActiveTab === 'library' &&
                      'Housing 85,000+ volumes, IEEE digital access nodes, and scholarly reading pods open until late night.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Location: P.O. Tilwara Ghat, Near Bargi Hills, Jabalpur</span>
                <span className="text-[#D4AF37] font-semibold">Autonomous Technical Institute</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: ERP PORTAL LOGIN                                                   */}
      {/* ========================================================================= */}
      {isErpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-md rounded-sm shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                  Autonomous Campus ERP
                </span>
                <h3 className="text-lg font-bold font-academic text-white">
                  GGITS Institutional Login
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsErpModalOpen(false);
                  setErpLoggedIn(false);
                }}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-3 bg-slate-100 p-1 text-xs border-b border-slate-200">
              <button
                onClick={() => setErpRole('student')}
                className={`py-2 font-semibold rounded-xs transition-colors cursor-pointer ${
                  erpRole === 'student' ? 'bg-white text-[#0B2545] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setErpRole('faculty')}
                className={`py-2 font-semibold rounded-xs transition-colors cursor-pointer ${
                  erpRole === 'faculty' ? 'bg-white text-[#0B2545] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Faculty
              </button>
              <button
                onClick={() => setErpRole('parent')}
                className={`py-2 font-semibold rounded-xs transition-colors cursor-pointer ${
                  erpRole === 'parent' ? 'bg-white text-[#0B2545] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Parent
              </button>
            </div>

            <div className="p-6">
              {erpLoggedIn ? (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold font-academic text-[#0B2545]">
                    Session Verified
                  </h4>
                  <p className="text-xs text-slate-600">
                    Welcome to the {erpRole.toUpperCase()} ERP dashboard. Accessing attendance, examination records,
                    and semester result ledger.
                  </p>
                  <button
                    onClick={() => setErpLoggedIn(false)}
                    className="mt-2 px-4 py-1.5 bg-[#0B2545] text-white text-xs font-semibold rounded cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setErpLoggedIn(true);
                  }}
                  className="space-y-4 text-xs"
                >
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {erpRole === 'student'
                        ? 'Enrollment Number (0208CS...)'
                        : erpRole === 'faculty'
                        ? 'Faculty Employee ID'
                        : 'Registered Mobile Number'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={erpRole === 'student' ? '0208CS231045' : 'GG-FAC-108'}
                      value={erpForm.username}
                      onChange={(e) => setErpForm({ ...erpForm, username: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Password</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={erpForm.password}
                      onChange={(e) => setErpForm({ ...erpForm, password: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545]"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <label className="flex items-center gap-1.5">
                      <input type="checkbox" className="rounded text-[#0B2545]" defaultChecked />
                      <span>Remember session</span>
                    </label>
                    <a href="#contact" className="text-[#0B2545] hover:underline font-medium">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#0B2545] hover:bg-slate-800 text-white font-bold rounded text-xs transition-colors cursor-pointer"
                  >
                    Sign In to Portal
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Protected by Autonomous Examination &amp; ERP security framework.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: FEE PAYMENT PORTAL                                                 */}
      {/* ========================================================================= */}
      {isFeeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-md rounded-sm shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                  Online Banking &amp; Challan
                </span>
                <h3 className="text-lg font-bold font-academic text-white">
                  GGITS Fee Payment Gateway
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsFeeModalOpen(false);
                  setFeeRecordFound(false);
                }}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              {!feeRecordFound ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (feeEnrollmentId) setFeeRecordFound(true);
                  }}
                  className="space-y-4"
                >
                  <p className="text-slate-600 leading-relaxed">
                    Enter student Enrollment Number or Registration ID to fetch outstanding semester tuition,
                    examination fee, or bus transportation dues.
                  </p>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Student Enrollment Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 0208CS221089"
                      value={feeEnrollmentId}
                      onChange={(e) => setFeeEnrollmentId(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0B2545] font-mono uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#B89222] text-[#061527] font-bold rounded text-xs cursor-pointer shadow-xs"
                  >
                    Fetch Fee Ledger
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded space-y-2">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Student:</span>
                      <span className="font-semibold text-slate-800">Aryan Sharma</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Enrollment:</span>
                      <span className="font-mono font-semibold text-slate-800">{feeEnrollmentId}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Branch &amp; Term:</span>
                      <span className="font-semibold text-slate-800">B.Tech CSE · Sem 5</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-700 font-bold">Total Semester Due:</span>
                      <span className="font-bold text-[#0B2545] font-academic text-base">₹ 42,500</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert('Simulated: Redirecting securely to Razorpay / BillDesk institutional checkout.');
                      setIsFeeModalOpen(false);
                      setFeeRecordFound(false);
                    }}
                    className="w-full py-3 bg-[#0B2545] hover:bg-slate-800 text-white font-bold rounded text-xs cursor-pointer shadow-sm"
                  >
                    Proceed to Bank Payment (UPI / NetBanking / Cards)
                  </button>

                  <button
                    onClick={() => setFeeRecordFound(false)}
                    className="w-full text-center text-slate-500 hover:text-slate-800 text-[11px] underline cursor-pointer"
                  >
                    Search different enrollment ID
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
