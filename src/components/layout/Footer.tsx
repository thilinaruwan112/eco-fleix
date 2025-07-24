const Footer = () => {
    return (
      <footer className="bg-card/50 border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EcoCollect Dubai. All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;
