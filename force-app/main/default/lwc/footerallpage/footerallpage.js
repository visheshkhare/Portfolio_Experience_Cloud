import { LightningElement } from 'lwc';
import insta from '@salesforce/resourceUrl/instagram';
import github from '@salesforce/resourceUrl/github';
import facebook from '@salesforce/resourceUrl/fb';
import linkdin from '@salesforce/resourceUrl/linkdin';

import { NavigationMixin } from 'lightning/navigation';

// Extend the NavigationMixin to enable page navigation
export default class FooterAllPage extends NavigationMixin(LightningElement) {

    instagram = insta;
    git = github;
    fb = facebook;
    linkdin = linkdin;

    // Method to handle page refresh (you can define your logic here)
    handlePageRefresh(pageName) {
        console.log('Page refreshed: ' + pageName);
        // Add custom logic to refresh the page if needed
    }

    // Lifecycle hook
    connectedCallback() {
        console.log('Component connected');
    }

    // to redirect it to linkdin
    handleNavigatelinkdin() {
          window.open('https://www.linkedin.com/in/vishesh-khare-4a8869185/', '_blank');
    }

    handleNavigateGithub(){
          window.open('https://github.com/visheshkhare', '_blank');
    }

    handleNavigateInstagram(){
          window.open('https://www.instagram.com/vishesh._.khare?igsh=NDJ1cjdyY2x6Zmtl', '_blank');
    }

    handleNavigateFacebook(){
          window.open('https://www.linkedin.com/in/vishesh-khare-4a8869185/', '_blank');
    }



    // Function to navigate to a named page
    navigateToPage(pageApiName1) {
        console.log('Navigating to page: ' + pageApiName1);

        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: pageApiName1
            }
        });
    }
}