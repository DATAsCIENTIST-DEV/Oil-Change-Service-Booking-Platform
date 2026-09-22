import type { Config } from 'tailwindcss';
export default { darkMode:['class'], content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{colors:{brand:'#1E3A8A',success:'#10B981',surface:'#F3F4F6',ink:'#1F2937'},fontFamily:{sans:['Inter','ui-sans-serif','system-ui']},borderRadius:{xl:'1rem','2xl':'1.25rem'}}}, plugins:[] } satisfies Config;
