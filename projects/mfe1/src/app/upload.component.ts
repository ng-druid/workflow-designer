import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mfe1-upload',
    template: `
        <div class="task">
            <!-- <img src="https://d16ooy9q113vw2.cloudfront.net/assets/upload.png"> -->
            <img src="https://d8em0358gicmm.cloudfront.net/assets/upload.png">
            <p>Upload</p>
        </div>
    `
})

export class UploadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}