import { Mail, Phone, Github, Linkedin, Instagram, Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/30 bg-surface">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">
                Innov<span className="text-primary">Nepal</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for precision robotics and electronics
              components in Nepal.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@onprocess.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@onprocess.com
              </a>
              <a
                href="tel:+9771234567890"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +977 1234567890
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-2.5 rounded-lg bg-muted/30 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <span className="font-bold text-gradient-blue">KripeshBhele</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
