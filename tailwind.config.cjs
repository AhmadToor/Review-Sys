/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
  	screens: {
  		md: '880px',
  		sm: '500px',
		lg : '1025px'
  	},
  	extend: {
  		backgroundImage: {
  			auth: "url('/src/assets/images/background.png')",
  			'primary-gradient': 'linear-gradient(98deg, #4648FF 36%, #FF7262 129.09%, #FFAEA5 173.03%)',
  			'secondary-gradient': 'linear-gradient(105deg, #4648FF 1%, #FF7262 67.09%, #FFAEA5 116.03%)',
			sidebar : 'url(/src/assets/images/SideBar.png)',
			sidebarInset: 'url(/src/assets/svg/Vector Background.svg)',
			header : "linear-gradient(105.98deg, rgba(255, 174, 165, 0.1) 0%, rgba(255, 114, 98, 0.1) 34.94%, rgba(70, 72, 255, 0.1) 100.03%);",
			dashboard1:
			"linear-gradient(105.98deg, rgba(70, 72, 255, 0.2) 0%, rgba(255, 114, 98, 0.2) 65.09%, rgba(255, 174, 165, 0.2) 100.03%)",
		  dashboard2:
			"linear-gradient(105.96deg, rgba(255, 127, 101, 0.2) 0%, rgba(246, 61, 104, 0.2) 28.22%, rgba(255, 217, 209, 0.2) 100%)",
		  dashboard3:
			"linear-gradient(105.96deg, rgba(252, 193, 136, 0.2) 0%, rgba(112, 66, 210, 0.2) 65.07%, rgba(46, 0, 142, 0.2) 100%)",

  		},
		
  		gridTemplateColumns: {
  			auth: '63fr 37fr'
  		},
  		fontSize: {
  			'3xl': '32px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		spacing: {
			'sidebar-height': 'calc(100% - 4rem)', 
			'sidebar-inset-width': 'calc(100% - 16rem)', 
		  },
  		colors: {
  			background: '#F4F4F4',
  			foreground: 'hsl(var(--foreground))',
			dashboardButton : '#EEEEEE',
			
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#4648FF',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: '#FF7F6599',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: '#fafafa',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))',
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}