 const host = process.env.BACKEND_HOST || 'clipboard-app';
 const port = process.env.BACKEND_PORT || '8080';
 const route = process.env.BACKEND_ROUTE || 'clipboards';
 const endpoint = `http://${host}:${port}/${route}`;

 export default {
     data() {
         return {
             entries: [],
         };
     },
     mounted() {
         this.fetchEntries();
     },
     methods: {
         async fetchEntries() {
             try {
                 const response = await fetch(endpoint);
                 if (response.ok) {
                     this.entries = await response.json();
                 } else {
                     console.error('Failed to fetch entries:', response.status, response.statusText);
                 }
             } catch (error) {
                 console.error('Error fetching entries:', error);
             }
         },
     },
 };