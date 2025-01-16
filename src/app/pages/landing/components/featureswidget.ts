import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'features-widget',
    standalone: true,
    imports: [CommonModule],
    template: ` <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
        <div class="grid grid-cols-12 gap-4 justify-center">
            <div class="col-span-12 text-center mt-20 mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Marvelous Features</div>
                <span class="text-muted-color text-2xl">Placerat in egestas erat...</span>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-users !text-2xl text-yellow-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Easy to Use</h5>
                        <span class="text-surface-600 dark:text-surface-200">Posuere morbi leo urna molestie.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-cyan-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-palette !text-2xl text-cyan-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Fresh Design</h5>
                        <span class="text-surface-600 dark:text-surface-200">Semper risus in hendrerit.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-map !text-2xl text-indigo-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Well Documented</div>
                        <span class="text-surface-600 dark:text-surface-200">Non arcu risus quis varius quam quisque.</span>
                    </div>
                </div>
            </div>

          


            <div
                class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
            >
                <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                    <div class="text-gray-900 mb-2 text-3xl font-semibold">Joséphine Miller</div>
                    <span class="text-gray-600 text-2xl">Peak Interactive</span>
                    <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                        “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
                    </p>
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg" class="mt-6" alt="Company logo" />
                </div>
            </div>
        </div>
    </div>`
})
export class FeaturesWidget {}
