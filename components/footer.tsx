export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-border/40">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center items-center text-sm text-muted-foreground">
          <p>© {currentYear} Ilyosbek Nishonov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}