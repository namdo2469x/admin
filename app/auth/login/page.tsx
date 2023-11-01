"use client";
import { Input } from "@nextui-org/react";
import { useMemo, useState } from "react";

export default function Login() {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: any) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <svg
          className="mx-auto h-10 w-auto"
          version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="1280.000000pt" height="1112.000000pt" viewBox="0 0 1280.000000 1112.000000"
          preserveAspectRatio="xMidYMid meet">
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g transform="translate(0.000000,1112.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M6800 11114 c-377 -28 -726 -85 -1100 -182 -74 -19 -147 -37 -162
-40 -16 -2 -28 -8 -28 -12 0 -15 75 -17 125 -4 111 28 287 38 432 25 522 -48
1088 -272 1565 -621 149 -108 387 -349 471 -476 108 -163 158 -289 177 -449
17 -144 -5 -254 -84 -415 l-51 -105 0 -115 c0 -68 6 -136 14 -165 16 -57 65
-161 89 -188 15 -17 13 -20 -19 -51 -19 -19 -496 -457 -1060 -974 l-1027 -940
-778 675 c-429 371 -792 686 -807 699 l-28 24 45 182 c143 575 385 1555 388
1570 2 13 -68 59 -287 189 -1010 599 -1819 1082 -1970 1178 -66 41 -125 76
-132 77 -9 2 -360 -314 -635 -572 l-67 -63 527 -483 c668 -612 776 -711 834
-764 l46 -43 -60 -193 c-33 -106 -68 -220 -78 -253 -37 -121 -119 -381 -127
-404 -9 -23 -45 -33 -483 -147 -453 -118 -475 -123 -494 -106 -10 9 -328 299
-704 645 l-685 627 -26 -23 c-377 -343 -610 -560 -614 -571 -3 -8 146 -209
370 -497 386 -497 658 -851 1032 -1346 118 -156 220 -283 228 -283 13 0 79 11
328 55 50 9 141 25 203 36 61 10 163 28 225 39 61 10 164 28 227 39 63 11 167
29 230 40 63 11 167 29 230 40 63 11 169 30 235 41 66 12 143 25 170 30 l50 8
125 -122 c124 -122 951 -926 1023 -995 l37 -37 -437 -384 c-241 -212 -723
-636 -1073 -944 -349 -307 -833 -732 -1074 -945 -893 -785 -1227 -1078 -1452
-1277 -128 -112 -257 -231 -287 -264 -119 -129 -156 -274 -103 -413 29 -78 65
-135 138 -219 60 -69 902 -842 986 -905 70 -53 193 -114 292 -145 61 -19 97
-23 195 -23 139 0 196 14 294 72 63 38 150 121 1456 1383 226 218 489 472 585
565 170 164 292 281 1175 1135 629 609 863 832 870 831 5 0 815 -787 1415
-1376 124 -121 495 -484 825 -805 330 -322 787 -767 1015 -990 707 -689 743
-724 810 -772 135 -95 241 -147 390 -188 111 -31 343 -35 458 -7 255 61 473
205 633 417 53 69 132 234 153 320 71 280 -16 562 -241 781 -65 64 -3593 3128
-4362 3789 -132 113 -239 210 -239 215 0 6 276 262 612 570 336 308 806 738
1045 957 l433 397 78 -55 c91 -63 197 -115 290 -140 98 -27 313 -25 449 4 127
27 203 28 305 2 194 -49 340 -165 634 -503 l120 -138 -98 -95 c-79 -77 -103
-108 -131 -167 -32 -67 -34 -79 -34 -172 0 -85 4 -110 28 -170 53 -135 164
-252 302 -316 95 -45 158 -59 266 -59 111 0 192 22 273 74 51 33 892 795 973
882 132 141 149 356 43 535 -53 90 -161 189 -252 233 -104 49 -150 60 -263 60
-103 0 -164 -14 -249 -56 l-38 -19 -25 23 c-50 45 -196 225 -255 313 -33 50
-109 187 -168 305 -125 250 -150 295 -233 410 -100 140 -323 397 -428 495
-114 105 -508 474 -594 555 -131 124 -831 778 -890 831 -101 93 -231 192 -369
284 -420 279 -861 438 -1421 511 -116 15 -618 27 -745 18z m4361 -9815 c90
-25 181 -89 234 -161 59 -79 79 -143 79 -248 0 -77 -3 -92 -37 -161 -63 -132
-173 -213 -335 -247 -103 -21 -204 -7 -307 43 -87 42 -120 75 -146 150 -61
174 -17 416 100 547 50 57 105 84 191 96 80 11 135 6 221 -19z"/>
          </g>
        </svg>
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div className="mt-2">
            <Input
              isRequired
              isClearable
              value={value}
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "default"}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setValue}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <div>
              <Input
                isRequired
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />

              <div className="text-sm mt-2 text-right">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Resgiter
          </a>
        </p>
      </div>
    </div>
  );
}

export const EyeSlashFilledIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
      fill="currentColor"
    />
    <path
      d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
      fill="currentColor"
    />
    <path
      d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
      fill="currentColor"
    />
    <path
      d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
      fill="currentColor"
    />
    <path
      d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
      fill="currentColor"
    />
  </svg>
);

export const EyeFilledIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
      fill="currentColor"
    />
    <path
      d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
      fill="currentColor"
    />
  </svg>
);
