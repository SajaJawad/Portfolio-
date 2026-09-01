"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Home, User, GraduationCap, FolderGit2, Cpu, Wrench, Mail, Github, Linkedin, Copy, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "./ui/Toast";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery("");
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saiamaher2002@gmail.com");
    showToast("Email address copied to clipboard!");
    onClose();
  };

  const commands = [
    {
      id: "home",
      title: "Go to Home",
      category: "Navigation",
      icon: <Home className="w-4 h-4" />,
      action: () => handleNavigate("/#hero"),
    },
    {
      id: "about",
      title: "About Me",
      category: "Navigation",
      icon: <User className="w-4 h-4" />,
      action: () => handleNavigate("/#about"),
    },
    {
      id: "journey",
      title: "Engineering Journey",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4" />,
      action: () => handleNavigate("/#experience"),
    },
    {
      id: "projects",
      title: "Selected Projects",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4" />,
      action: () => handleNavigate("/projects"),
    },
    {
      id: "stack",
      title: "Tech Stack",
      category: "Navigation",
      icon: <Wrench className="w-4 h-4" />,
      action: () => handleNavigate("/#stack"),
    },
    {
      id: "capabilities",
      title: "Capabilities",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4" />,
      action: () => handleNavigate("/#services"),
    },
    {
      id: "contact",
      title: "Contact",
      category: "Navigation",
      icon: <Mail className="w-4 h-4" />,
      action: () => handleNavigate("/#contact"),
    },
    {
      id: "resume",
      title: "Download Résumé (PDF)",
      category: "Action",
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        window.open("/resume.pdf", "_blank");
        onClose();
      },
    },
    {
      id: "copy-email",
      title: "Copy Email (saiamaher2002@gmail.com)",
      category: "Action",
      icon: <Copy className="w-4 h-4" />,
      action: handleCopyEmail,
    },
    {
      id: "github",
      title: "Open GitHub Profile",
      category: "External Link",
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/SajaJawad", "_blank", "noopener,noreferrer");
        onClose();
      },
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile",
      category: "External Link",
      icon: <Linkedin className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/SajaJawad", "_blank", "noopener,noreferrer");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-foreground/30 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-surface border border-border rounded-xl shadow-card overflow-hidden z-10"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 border-b border-border">
            <Search className="w-4 h-4 text-muted-foreground mr-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search..."
              autoFocus
              className="w-full py-3.5 bg-transparent text-sm text-foreground focus:outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={onClose}
              type="button"
              className="p-1 rounded text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-xs text-muted-foreground">
                No matching commands found.
              </div>
            ) : (
              filteredCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs font-medium text-foreground hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {cmd.icon}
                    </span>
                    <span>{cmd.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-background border border-border">
                    {cmd.category}
                  </span>
                </button>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default CommandPalette;
