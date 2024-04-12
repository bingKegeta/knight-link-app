import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="border-2 border-info rounded-box my-[1%] ml-[1%] w-[98%]">
      <div className="navbar glass rounded-box bg-neutral">
        <div className="flex-1">
          <Link href="/test" className="text-xl btn btn-ghost">
            Knight-Link
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-2 mr-8">
            <li className="mr-2">
              <details>
                <summary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M 171.3548387096774 407.741935483871 Q 170.32258064516128 411.8709677419355 166.19354838709677 411.8709677419355 Q 160 411.8709677419355 160 407.741935483871 Q 161.03225806451613 404.64516129032256 165.16129032258064 404.64516129032256 Q 170.32258064516128 404.64516129032256 171.3548387096774 407.741935483871 L 171.3548387096774 407.741935483871 Z M 139.3548387096774 403.61290322580646 Q 138.32258064516128 406.7096774193548 143.48387096774192 408.7741935483871 Q 148.6451612903226 409.80645161290323 149.67741935483872 406.7096774193548 Q 150.70967741935485 402.5806451612903 145.5483870967742 401.5483870967742 Q 140.38709677419354 400.51612903225805 139.3548387096774 403.61290322580646 L 139.3548387096774 403.61290322580646 Z M 184.7741935483871 401.5483870967742 Q 179.61290322580646 402.5806451612903 179.61290322580646 406.7096774193548 Q 180.6451612903226 409.80645161290323 185.80645161290323 409.80645161290323 Q 190.96774193548387 407.741935483871 190.96774193548387 404.64516129032256 Q 189.93548387096774 401.5483870967742 184.7741935483871 401.5483870967742 L 184.7741935483871 401.5483870967742 Z M 252.90322580645162 6.193548387096774 Q 142.4516129032258 8.258064516129032 72.25806451612904 78.45161290322581 L 72.25806451612904 78.45161290322581 L 72.25806451612904 78.45161290322581 Q 2.064516129032258 148.6451612903226 0 258.06451612903226 Q 1.032258064516129 345.80645161290323 48.516129032258064 411.8709677419355 Q 96 477.93548387096774 175.48387096774192 504.7741935483871 Q 194.06451612903226 505.80645161290323 193.03225806451613 492.38709677419354 Q 193.03225806451613 488.258064516129 193.03225806451613 476.9032258064516 Q 193.03225806451613 453.16129032258067 193.03225806451613 429.4193548387097 Q 190.96774193548387 429.4193548387097 173.41935483870967 431.48387096774195 Q 154.83870967741936 432.51612903225805 134.19354838709677 427.35483870967744 Q 113.54838709677419 421.16129032258067 105.29032258064517 398.4516129032258 Q 105.29032258064517 396.38709677419354 97.03225806451613 381.93548387096774 Q 88.7741935483871 368.51612903225805 76.38709677419355 360.258064516129 Q 74.3225806451613 359.2258064516129 68.12903225806451 352 Q 60.903225806451616 345.80645161290323 78.45161290322581 344.7741935483871 Q 79.48387096774194 343.741935483871 92.90322580645162 348.9032258064516 Q 106.3225806451613 353.03225806451616 117.6774193548387 371.61290322580646 Q 136.25806451612902 399.48387096774195 157.93548387096774 399.48387096774195 Q 180.6451612903226 399.48387096774195 193.03225806451613 393.2903225806452 Q 197.16129032258064 368.51612903225805 209.5483870967742 358.19354838709677 Q 164.1290322580645 356.1290322580645 130.06451612903226 335.48387096774195 Q 96 315.8709677419355 93.93548387096774 243.61290322580646 Q 93.93548387096774 222.96774193548387 100.12903225806451 209.5483870967742 Q 105.29032258064517 196.1290322580645 117.6774193548387 183.74193548387098 Q 115.61290322580645 177.5483870967742 113.54838709677419 158.96774193548387 Q 111.48387096774194 140.38709677419354 120.7741935483871 113.54838709677419 Q 139.3548387096774 110.45161290322581 164.1290322580645 124.90322580645162 Q 189.93548387096774 138.32258064516128 192 141.41935483870967 Q 192 141.41935483870967 192 141.41935483870967 Q 222.96774193548387 132.1290322580645 257.03225806451616 132.1290322580645 Q 290.06451612903226 132.1290322580645 322.06451612903226 141.41935483870967 Q 322.06451612903226 140.38709677419354 335.48387096774195 132.1290322580645 Q 347.8709677419355 123.87096774193549 364.38709677419354 117.6774193548387 Q 380.9032258064516 110.45161290322581 393.2903225806452 113.54838709677419 Q 402.5806451612903 140.38709677419354 400.51612903225805 158.96774193548387 Q 398.4516129032258 177.5483870967742 395.35483870967744 183.74193548387098 Q 407.741935483871 196.1290322580645 414.96774193548384 209.5483870967742 Q 422.19354838709677 222.96774193548387 422.19354838709677 243.61290322580646 Q 421.16129032258067 293.16129032258067 404.64516129032256 316.9032258064516 Q 387.0967741935484 339.61290322580646 360.258064516129 347.8709677419355 Q 333.4193548387097 356.1290322580645 303.48387096774195 358.19354838709677 Q 320 369.5483870967742 321.03225806451616 405.6774193548387 Q 321.03225806451616 443.8709677419355 321.03225806451616 473.80645161290323 Q 321.03225806451616 487.2258064516129 321.03225806451616 492.38709677419354 Q 320 505.80645161290323 338.5806451612903 504.7741935483871 Q 417.03225806451616 477.93548387096774 464.51612903225805 411.8709677419355 Q 510.96774193548384 345.80645161290323 512 258.06451612903226 Q 510.96774193548384 185.80645161290323 476.9032258064516 129.03225806451613 Q 441.80645161290323 72.25806451612904 384 39.225806451612904 Q 325.16129032258067 7.225806451612903 252.90322580645162 6.193548387096774 L 252.90322580645162 6.193548387096774 Z M 100.12903225806451 362.3225806451613 Q 98.06451612903226 364.38709677419354 101.16129032258064 367.48387096774195 Q 104.25806451612904 370.5806451612903 106.3225806451613 368.51612903225805 Q 108.38709677419355 366.4516129032258 105.29032258064517 363.35483870967744 Q 103.2258064516129 360.258064516129 100.12903225806451 362.3225806451613 L 100.12903225806451 362.3225806451613 Z M 88.7741935483871 354.06451612903226 Q 88.7741935483871 356.1290322580645 91.87096774193549 358.19354838709677 Q 94.96774193548387 359.2258064516129 96 357.16129032258067 Q 97.03225806451613 355.0967741935484 93.93548387096774 353.03225806451616 Q 90.83870967741936 352 88.7741935483871 354.06451612903226 L 88.7741935483871 354.06451612903226 Z M 122.83870967741936 390.19354838709677 Q 120.7741935483871 393.2903225806452 123.87096774193549 397.4193548387097 Q 128 400.51612903225805 131.09677419354838 398.4516129032258 Q 132.1290322580645 395.35483870967744 129.03225806451613 391.2258064516129 Q 124.90322580645162 388.1290322580645 122.83870967741936 390.19354838709677 L 122.83870967741936 390.19354838709677 Z M 110.45161290322581 375.741935483871 Q 108.38709677419355 377.80645161290323 110.45161290322581 381.93548387096774 Q 113.54838709677419 385.03225806451616 116.64516129032258 384 Q 118.70967741935483 381.93548387096774 116.64516129032258 377.80645161290323 Q 113.54838709677419 373.6774193548387 110.45161290322581 375.741935483871 L 110.45161290322581 375.741935483871 Z" />
                  </svg>
                </summary>
                <ul className="p-2 bg-neutral border-2 border-info rounded-t-none border-t-0">
                  <li>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M 64 48 Q 44 49 30 62 L 30 62 L 30 62 Q 17 76 16 96 L 16 416 L 16 416 Q 17 436 30 450 Q 44 463 64 464 L 448 464 L 448 464 Q 468 463 482 450 Q 495 436 496 416 L 496 96 L 496 96 Q 495 76 482 62 Q 468 49 448 48 L 64 48 L 64 48 Z M 0 96 Q 1 69 19 51 L 19 51 L 19 51 Q 37 33 64 32 L 448 32 L 448 32 Q 475 33 493 51 Q 511 69 512 96 L 512 416 L 512 416 Q 511 443 493 461 Q 475 479 448 480 L 64 480 L 64 480 Q 37 479 19 461 Q 1 443 0 416 L 0 96 L 0 96 Z M 96 112 Q 111 113 112 128 Q 111 143 96 144 Q 81 143 80 128 Q 81 113 96 112 L 96 112 Z M 176 128 Q 177 113 192 112 Q 207 113 208 128 Q 207 143 192 144 Q 177 143 176 128 L 176 128 Z M 288 112 Q 303 113 304 128 Q 303 143 288 144 Q 273 143 272 128 Q 273 113 288 112 L 288 112 Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M 64 48 Q 44 49 30 62 L 30 62 L 30 62 Q 17 76 16 96 L 16 160 L 16 160 Q 17 180 30 194 Q 44 207 64 208 L 448 208 L 448 208 Q 468 207 482 194 Q 495 180 496 160 L 496 96 L 496 96 Q 495 76 482 62 Q 468 49 448 48 L 64 48 L 64 48 Z M 0 96 Q 1 69 19 51 L 19 51 L 19 51 Q 37 33 64 32 L 448 32 L 448 32 Q 475 33 493 51 Q 511 69 512 96 L 512 160 L 512 160 Q 511 187 493 205 Q 475 223 448 224 L 64 224 L 64 224 Q 37 223 19 205 Q 1 187 0 160 L 0 96 L 0 96 Z M 64 304 Q 44 305 30 318 L 30 318 L 30 318 Q 17 332 16 352 L 16 416 L 16 416 Q 17 436 30 450 Q 44 463 64 464 L 448 464 L 448 464 Q 468 463 482 450 Q 495 436 496 416 L 496 352 L 496 352 Q 495 332 482 318 Q 468 305 448 304 L 64 304 L 64 304 Z M 0 352 Q 1 325 19 307 L 19 307 L 19 307 Q 37 289 64 288 L 448 288 L 448 288 Q 475 289 493 307 Q 511 325 512 352 L 512 416 L 512 416 Q 511 443 493 461 Q 475 479 448 480 L 64 480 L 64 480 Q 37 479 19 461 Q 1 443 0 416 L 0 352 L 0 352 Z M 336 384 Q 337 369 352 368 Q 367 369 368 384 Q 367 399 352 400 Q 337 399 336 384 L 336 384 Z M 352 112 Q 367 113 368 128 Q 367 143 352 144 Q 337 143 336 128 Q 337 113 352 112 L 352 112 Z M 400 384 Q 401 369 416 368 Q 431 369 432 384 Q 431 399 416 400 Q 401 399 400 384 L 400 384 Z M 416 112 Q 431 113 432 128 Q 431 143 416 144 Q 401 143 400 128 Q 401 113 416 112 L 416 112 Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M 368 128 Q 368 98 353 72 L 353 72 L 353 72 Q 338 46 312 31 Q 286 16 256 16 Q 226 16 200 31 Q 174 46 159 72 Q 144 98 144 128 Q 144 158 159 184 Q 174 210 200 225 Q 226 240 256 240 Q 286 240 312 225 Q 338 210 353 184 Q 368 158 368 128 L 368 128 Z M 128 128 Q 128 93 145 64 L 145 64 L 145 64 Q 162 35 192 17 Q 222 0 256 0 Q 290 0 320 17 Q 350 35 367 64 Q 384 93 384 128 Q 384 163 367 192 Q 350 221 320 239 Q 290 256 256 256 Q 222 256 192 239 Q 162 221 145 192 Q 128 163 128 128 L 128 128 Z M 48 482 Q 49 495 62 496 L 450 496 L 450 496 Q 463 495 464 482 Q 462 413 416 368 Q 371 322 302 320 L 210 320 L 210 320 Q 141 322 96 368 Q 50 413 48 482 L 48 482 Z M 32 482 Q 34 407 84 356 L 84 356 L 84 356 Q 135 306 210 304 L 302 304 L 302 304 Q 377 306 428 356 Q 478 407 480 482 Q 480 495 471 503 Q 463 512 450 512 L 62 512 L 62 512 Q 49 512 41 503 Q 32 495 32 482 L 32 482 Z" />
                  </svg>
                </summary>
                <ul className="bg-neutral rounded-t-none border-2 border-info border-t-0">
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}