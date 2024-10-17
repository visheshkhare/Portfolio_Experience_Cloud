import { LightningElement } from 'lwc';
import image1  from '@salesforce/resourceUrl/Groot1';
import image2  from '@salesforce/resourceUrl/Groot2';
import image3  from '@salesforce/resourceUrl/Groot3';
import { NavigationMixin } from 'lightning/navigation';

export default class Header extends NavigationMixin(LightningElement) {

    backgroundImage = ''; // Placeholder for background image
    dot = '';
    lineIndex = 0; 
    intervalId; 
    

    images = [
        image1
    ]; // Add your list of image URLs here
    currentImageIndex = 0;

    connectedCallback() {

        //for all pages 
        // this.handlePageRefresh(Home);
        // navigateToPage(pageApiName1) {
        //     console.log('pageApiName in navigation function: ' + JSON.stringify(pageApiName));

        //     // Ensure that NavigationMixin is properly called
        //     this[NavigationMixin.Navigate]({
        //         type: 'comm__namedPage',
        //         attributes: {
        //             name: pageApiName1
        //         }
        //     });
        // }



        // Start the interval when the component is connected to the DOM
        this.updateBackgroundImage();
        setInterval(() => {
            this.updateBackgroundImage();
        }, 1500); 

        this.intervalId = setInterval(() => {
            if (this.lineIndex < 5) { // Loop until 5 lines are printed
                this.dot += "."; // Add dot and break to create a new line
                this.lineIndex++; // Increment line index
            } else {
                clearInterval(this.intervalId); // Stop once 5 dots are printed
            }
        }, 1000); // Every 1 second
    
        setTimeout(() => {
            this.clickButton();
        }, 4000);
    }

    updatedot() {
        for (let i = 0; i < 5; i++) {
        this.dot += "."; 
    }
    }



    

    clickButton() {
        const button = this.template.querySelector('.redirect');
        if (button) {
            button.click(); // Programmatically click the button
        }
    }

    updateBackgroundImage() {
        this.backgroundImage = this.images[this.currentImageIndex];
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; // Loop back to the start
    }

    get backgroundStyle() {
        return `background-image: url(${this.backgroundImage});`;
    }
    // get backgroundStyle() {
    //     return `background-image: url(${backgroundImage});`;
    // }

    handleNavigation() {
        // Call navigateToPage with the API name of the page you want to navigate to
        this.navigateToPage('allcontent__c');
    }

    navigateToPage(pageApiName) {
        console.log('pageApiName in navigation function: ' + JSON.stringify(pageApiName));

        // Ensure that NavigationMixin is properly called
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: pageApiName
            }
        });
    }

    handleDownload() {
        // Implement the resume download functionality here
        console.log('Downloading resume...');
    }
}