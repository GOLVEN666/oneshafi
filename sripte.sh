#!/bin/bash

# Fix Next.js missing pages/app directory error
set -e

echo "Ì∞∏ Which router do you want to use?"
select router in "Pages Router" "App Router"; do
  case $router in
    "Pages Router" )
      mkdir -p pages
      echo "export default function Home() { return <div>Hello World</div> }" > pages/index.js
      break
      ;;
    "App Router" )
      mkdir -p app
      echo "export default function RootLayout({ children }) { 
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}" > app/layout.js
      echo "export default function Page() { return <div>Hello World</div> }" > app/page.js
      
      # Check Next.js version for experimental flag
      NEXT_VERSION=$(grep '"next":' package.json | awk -F\" '{print $4}')
      if [[ $NEXT_VERSION =~ ^13\.[0-3]\. ]]; then
        echo "Adding experimental appDir configuration..."
        echo "module.exports = {
  experimental: {
    appDir: true
  }
}" > next.config.js
      fi
      break
      ;;
    * ) echo "Invalid option";;
  esac
done

echo "‚úÖ Created $router structure!"
echo "Ì≥Å Project structure now looks like:"
tree -L 3 -I 'node_modules'

echo "ÔøΩÔøΩ Run 'npm run build' to verify the fix"
