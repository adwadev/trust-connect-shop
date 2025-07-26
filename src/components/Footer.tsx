import { Mail, MessageCircle, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Secure Marketplace
            </h3>
            <p className="text-muted-foreground text-sm">
              The secure platform for trusted buying and selling
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Questions?</p>
            <a 
              href="mailto:hello@marketplace.com" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@marketplace.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a 
              href="https://t.me/marketplace" 
              className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors" />
            </a>
            <a 
              href="https://twitter.com/marketplace" 
              className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;