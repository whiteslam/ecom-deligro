#!/bin/bash

# 🏗️ Deligro Folder Structure Migration Script
# This script will reorganize your folder structure to the new professional layout

set -e  # Exit on error

echo "🚀 Starting Deligro Folder Structure Migration..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Base directory
BASE_DIR="app"

echo "${BLUE}📁 Phase 1: Creating new folder structure...${NC}"

# Create component folders
mkdir -p "$BASE_DIR/components/layout"
mkdir -p "$BASE_DIR/components/navigation"
mkdir -p "$BASE_DIR/components/ui/buttons"
mkdir -p "$BASE_DIR/components/ui/cards"
mkdir -p "$BASE_DIR/components/ui/modals"
mkdir -p "$BASE_DIR/components/ui/toggles"
mkdir -p "$BASE_DIR/components/ui/inputs"
mkdir -p "$BASE_DIR/components/ui/badges"
mkdir -p "$BASE_DIR/components/sections/home"
mkdir -p "$BASE_DIR/components/sections/service"
mkdir -p "$BASE_DIR/components/sections/order"
mkdir -p "$BASE_DIR/components/forms"

# Create lib, types, hooks, context folders
mkdir -p "$BASE_DIR/lib"
mkdir -p "$BASE_DIR/types"
mkdir -p "$BASE_DIR/hooks"
mkdir -p "$BASE_DIR/context"

# Move data folder to root level
mkdir -p "data"

# Create route group folders
mkdir -p "$BASE_DIR/(main)"
mkdir -p "$BASE_DIR/(auth)"
mkdir -p "$BASE_DIR/(user)"
mkdir -p "$BASE_DIR/(ordering)"
mkdir -p "$BASE_DIR/(admin)"
mkdir -p "$BASE_DIR/(rider)"
mkdir -p "$BASE_DIR/(legal)"

echo "${GREEN}✅ Folder structure created${NC}"
echo ""

echo "${BLUE}📦 Phase 2: Moving components...${NC}"

# Move layout components
if [ -f "$BASE_DIR/components/Navbar.tsx" ]; then
    mv "$BASE_DIR/components/Navbar.tsx" "$BASE_DIR/components/layout/"
    echo "  ✓ Moved Navbar.tsx"
fi

if [ -f "$BASE_DIR/components/Footer.tsx" ]; then
    mv "$BASE_DIR/components/Footer.tsx" "$BASE_DIR/components/layout/"
    echo "  ✓ Moved Footer.tsx"
fi

# Move navigation components
if [ -f "$BASE_DIR/components/UserProfileMenu.tsx" ]; then
    mv "$BASE_DIR/components/UserProfileMenu.tsx" "$BASE_DIR/components/navigation/"
    echo "  ✓ Moved UserProfileMenu.tsx"
fi

if [ -f "$BASE_DIR/components/ServicesSection.tsx" ]; then
    mv "$BASE_DIR/components/ServicesSection.tsx" "$BASE_DIR/components/navigation/ServicesMenu.tsx"
    echo "  ✓ Moved ServicesSection.tsx → ServicesMenu.tsx"
fi

# Move UI components
if [ -f "$BASE_DIR/components/RestaurantCard.tsx" ]; then
    mv "$BASE_DIR/components/RestaurantCard.tsx" "$BASE_DIR/components/ui/cards/"
    echo "  ✓ Moved RestaurantCard.tsx"
fi

if [ -f "$BASE_DIR/components/LocationPopup.tsx" ]; then
    mv "$BASE_DIR/components/LocationPopup.tsx" "$BASE_DIR/components/ui/modals/"
    echo "  ✓ Moved LocationPopup.tsx"
fi

if [ -f "$BASE_DIR/components/ThemeToggle.tsx" ]; then
    mv "$BASE_DIR/components/ThemeToggle.tsx" "$BASE_DIR/components/ui/toggles/"
    echo "  ✓ Moved ThemeToggle.tsx"
fi

if [ -f "$BASE_DIR/components/LiquidDarkModeToggle.tsx" ]; then
    mv "$BASE_DIR/components/LiquidDarkModeToggle.tsx" "$BASE_DIR/components/ui/toggles/"
    echo "  ✓ Moved LiquidDarkModeToggle.tsx"
fi

echo "${GREEN}✅ Components moved${NC}"
echo ""

echo "${BLUE}🔧 Phase 3: Moving lib and data files...${NC}"

# Move firebase config
if [ -f "$BASE_DIR/firebase.ts" ]; then
    mv "$BASE_DIR/firebase.ts" "$BASE_DIR/lib/"
    echo "  ✓ Moved firebase.ts"
fi

# Move data folder
if [ -d "$BASE_DIR/data" ]; then
    cp -r "$BASE_DIR/data/"* "data/" 2>/dev/null || true
    echo "  ✓ Copied data files"
fi

echo "${GREEN}✅ Lib and data files moved${NC}"
echo ""

echo "${BLUE}📄 Phase 4: Moving pages to route groups...${NC}"

# Main pages
for page in "about" "service" "contact" "careers"; do
    if [ -d "$BASE_DIR/$page" ]; then
        mv "$BASE_DIR/$page" "$BASE_DIR/(main)/"
        echo "  ✓ Moved $page to (main)"
    fi
done

# Auth pages
if [ -d "$BASE_DIR/login" ]; then
    mv "$BASE_DIR/login" "$BASE_DIR/(auth)/"
    echo "  ✓ Moved login to (auth)"
fi

# User pages
for page in "profile" "settings" "myorders" "cart"; do
    if [ -d "$BASE_DIR/$page" ]; then
        mv "$BASE_DIR/$page" "$BASE_DIR/(user)/"
        echo "  ✓ Moved $page to (user)"
    fi
done

# Ordering pages
for page in "order" "restaurant" "payment" "foodie"; do
    if [ -d "$BASE_DIR/$page" ]; then
        mv "$BASE_DIR/$page" "$BASE_DIR/(ordering)/"
        echo "  ✓ Moved $page to (ordering)"
    fi
done

# Admin pages
if [ -d "$BASE_DIR/admin" ]; then
    mv "$BASE_DIR/admin" "$BASE_DIR/(admin)/"
    echo "  ✓ Moved admin to (admin)"
fi

# Rider pages
if [ -d "$BASE_DIR/rider" ]; then
    mv "$BASE_DIR/rider" "$BASE_DIR/(rider)/"
    echo "  ✓ Moved rider to (rider)"
fi

# Legal pages
for page in "privacy-policy" "cookie-policy" "terms-conditions" "feedback" "report"; do
    if [ -d "$BASE_DIR/$page" ]; then
        mv "$BASE_DIR/$page" "$BASE_DIR/(legal)/"
        echo "  ✓ Moved $page to (legal)"
    fi
done

echo "${GREEN}✅ Pages moved to route groups${NC}"
echo ""

echo "${BLUE}📝 Phase 5: Creating index files...${NC}"

# Create barrel exports for UI components
cat > "$BASE_DIR/components/ui/cards/index.ts" << 'EOF'
export { default as RestaurantCard } from './RestaurantCard';
EOF

cat > "$BASE_DIR/components/ui/modals/index.ts" << 'EOF'
export { default as LocationPopup } from './LocationPopup';
EOF

cat > "$BASE_DIR/components/ui/toggles/index.ts" << 'EOF'
export { default as ThemeToggle } from './ThemeToggle';
export { default as LiquidDarkModeToggle } from './LiquidDarkModeToggle';
EOF

cat > "$BASE_DIR/components/layout/index.ts" << 'EOF'
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
EOF

cat > "$BASE_DIR/components/navigation/index.ts" << 'EOF'
export { default as UserProfileMenu } from './UserProfileMenu';
export { default as ServicesMenu } from './ServicesMenu';
EOF

echo "  ✓ Created index files for barrel exports"
echo "${GREEN}✅ Index files created${NC}"
echo ""

echo "${YELLOW}⚠️  MANUAL STEPS REQUIRED:${NC}"
echo ""
echo "1. Update tsconfig.json to add path aliases:"
echo '   "paths": {'
echo '     "@/components/*": ["./app/components/*"],'
echo '     "@/lib/*": ["./app/lib/*"],'
echo '     "@/types/*": ["./app/types/*"],'
echo '     "@/data/*": ["./data/*"]'
echo '   }'
echo ""
echo "2. Update all import statements in files:"
echo "   - Search for: import.*from.*'../components"
echo "   - Replace with: import.*from.*'@/components"
echo ""
echo "3. Split FoodiePage.tsx into smaller sections:"
echo "   - Create HeroSection.tsx"
echo "   - Create FeaturesSection.tsx"
echo "   - Create PopularRestaurants.tsx"
echo "   - Create WhyChooseUs.tsx"
echo "   - Create CustomerFeedback.tsx"
echo ""
echo "4. Update firebase imports:"
echo "   - Change: import.*firebase.*from.*'./firebase'"
echo "   - To: import.*firebase.*from.*'@/lib/firebase'"
echo ""
echo "5. Update data imports:"
echo "   - Change: import.*from.*'../data/restaurants'"
echo "   - To: import.*from.*'@/data/restaurants'"
echo ""
echo "${GREEN}✅ Migration complete!${NC}"
echo ""
echo "📚 See FOLDER_STRUCTURE_GUIDE.md for detailed documentation"
echo "🔍 Run 'npm run dev' to test the changes"
echo ""
