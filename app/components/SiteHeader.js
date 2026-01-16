export default function SiteHeader() {
    return (
        <header className="flex gap-4 justify-between py-4 px-8">
            <div>Site Logo</div>
            <nav>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

        </header>
    )
}