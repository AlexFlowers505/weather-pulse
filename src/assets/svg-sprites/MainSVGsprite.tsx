import React from 'react'
import { default as svgID } from '../../constants/svgSymbolsIDs'

const MainSVGsprite: React.FC = () => {
  return (
    <svg className='hidden'>
        <defs>
            <symbol id={svgID.iconWeather} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3125 3.73427L15.1875 7.10927L14.0625 3.73427C13.8555 3.11215 14.1908 2.44165 14.8118 2.23465C15.4339 2.02652 16.1055 2.3629 16.3125 2.9839C16.3969 3.23815 16.3912 3.49915 16.3125 3.73427ZM22.347 7.16552L19.1644 8.7574L20.7563 5.57477C21.0499 4.98865 21.762 4.7524 22.347 5.04377C22.9331 5.3374 23.1694 6.04952 22.878 6.63565C22.7576 6.87415 22.5697 7.05415 22.347 7.16552ZM24.1875 13.8593L20.8125 12.7343L24.1875 11.6093C24.8096 11.4011 25.4801 11.7375 25.6882 12.3596C25.8953 12.9806 25.5589 13.6511 24.9368 13.8593C24.6836 13.9436 24.4226 13.9369 24.1875 13.8593ZM9.61875 5.57477L11.2106 8.7574L8.028 7.16552C7.44187 6.8719 7.2045 6.15977 7.497 5.57477C7.79063 4.98865 8.50388 4.7524 9.08775 5.04377C9.32738 5.16415 9.50737 5.35202 9.61875 5.57477ZM19.998 14.244C20.1544 13.767 20.25 13.2641 20.25 12.7343C20.25 9.94315 17.9786 7.67177 15.1875 7.67177C13.68 7.67177 12.3334 8.34002 11.4109 9.39077L11.25 9.35927C9.252 9.35927 7.45988 10.2368 6.22237 11.6216C5.95237 11.5316 5.69138 11.5249 5.43825 11.6093C4.81613 11.8174 4.47975 12.4879 4.68675 13.1089C4.75087 13.2968 4.8645 13.4453 4.99837 13.5713C4.68 14.3554 4.5 15.2115 4.5 16.1093L4.50225 16.251C2.56162 16.7516 1.125 18.5156 1.125 20.6093C1.125 23.091 3.14438 25.1093 5.625 25.1093H18C21.1016 25.1093 23.625 22.5859 23.625 19.4843C23.625 17.0891 22.113 15.0529 19.998 14.244ZM15.1875 9.92177C16.7389 9.92177 18 11.1829 18 12.7343C18 13.146 17.892 13.5285 17.7323 13.8806C17.334 13.9043 16.9222 13.9639 16.4745 14.0921C15.8884 12.57 14.67 11.3753 13.1366 10.824C13.6496 10.2728 14.3764 9.92177 15.1875 9.92177ZM18 22.8593H5.625C4.383 22.8593 3.375 21.8501 3.375 20.6093C3.375 19.3684 4.383 18.3593 5.5215 18.3525L7.12125 18.3705L6.84225 17.0183C6.78037 16.7224 6.75 16.4153 6.75 16.1093C6.75 13.6275 8.76937 11.6093 11.25 11.6093L11.3276 11.5935C13.4696 11.6554 15.2595 13.1753 15.6555 15.2723L15.6983 15.4815C15.8366 15.972 16.2799 16.2758 16.7625 16.2825L17.0876 16.2566C17.4386 16.1554 17.7278 16.1093 18 16.1093C19.8608 16.1093 21.375 17.6235 21.375 19.4843C21.375 21.345 19.8608 22.8593 18 22.8593Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconLocation} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1507 0.226845L2.35233 12.5954C-0.739487 14.0385 0.291119 18.5734 3.58918 18.5734H14.9271V29.9114C14.9271 33.2094 19.4621 34.2407 20.9052 31.1482L33.2737 4.34991C34.3043 1.87556 31.6244 -0.804405 29.1507 0.226845Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconAddToFavourite} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2597 23.0725C18.017 23.0725 17.7798 23.0183 17.5598 22.9143L17.4472 22.859L12.9979 20.3208L8.54868 22.8601L8.43385 22.9175C7.90518 23.1645 7.25843 23.106 6.7861 22.7626C6.27801 22.3943 6.02668 21.7519 6.15126 21.1279L7.18801 16.099L5.45251 14.5206L3.3996 12.6519L3.3151 12.563C2.90885 12.134 2.76368 11.5122 2.94676 10.9467C3.13418 10.379 3.61843 9.9587 4.20343 9.85362L4.31393 9.83412L9.40668 9.2697L11.5148 4.60053L11.5798 4.48137C11.8637 3.96895 12.4075 3.64612 12.9979 3.64612C13.5862 3.64612 14.1289 3.96895 14.416 4.48028L14.481 4.60162L16.5913 9.27295L21.6841 9.83737L21.7968 9.85578C22.3807 9.96412 22.8649 10.3823 23.0513 10.9521C23.2354 11.5165 23.0892 12.1416 22.6829 12.5706L22.5984 12.6551L18.8089 16.1045L19.8457 21.1225C19.9681 21.7584 19.7178 22.3986 19.2065 22.768C18.9335 22.9652 18.6042 23.0725 18.2597 23.0725ZM9.4316 15.9615C9.38935 16.1586 8.92676 18.3946 8.51618 20.3836L12.4628 18.1335C12.7953 17.944 13.2038 17.944 13.5353 18.1335L17.4818 20.3815L16.5621 15.9355C16.4852 15.5606 16.6108 15.1717 16.8958 14.915L20.2541 11.8578L15.7388 11.3584C15.3585 11.3161 15.0303 11.0767 14.871 10.7257L12.999 6.58629L11.1292 10.7257C10.971 11.0745 10.6417 11.314 10.2614 11.3584L5.7461 11.8578L9.10443 14.915C9.3991 15.1815 9.52043 15.5834 9.4316 15.9615Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconFavourite} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.687 4.10248C12.1723 2.93573 13.8276 2.93573 14.313 4.10248L16.5685 9.52565L22.4228 9.99581C23.6838 10.0966 24.1951 11.6696 23.2342 12.4929L18.7741 16.3138L20.1359 22.0262C20.4295 23.2569 19.0915 24.2286 18.0125 23.57L13 20.5085L7.98738 23.57C6.90838 24.2286 5.57046 23.2558 5.86405 22.0262L7.22579 16.3138L2.76571 12.4929C1.8048 11.6696 2.31613 10.0966 3.57713 9.99581L9.43146 9.52565L11.687 4.10248Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.22542 4.81108C5.83489 4.42056 5.20173 4.42056 4.8112 4.81108C4.42068 5.20161 4.42068 5.83477 4.8112 6.2253L10.5859 12L4.81126 17.7747C4.42074 18.1652 4.42074 18.7984 4.81126 19.1889C5.20179 19.5794 5.83495 19.5794 6.22547 19.1889L12.0001 13.4142L17.7748 19.1889C18.1653 19.5794 18.7985 19.5794 19.189 19.1889C19.5795 18.7984 19.5795 18.1652 19.189 17.7747L13.4143 12L19.1891 6.2253C19.5796 5.83477 19.5796 5.20161 19.1891 4.81108C18.7986 4.42056 18.1654 4.42056 17.7749 4.81108L12.0001 10.5858L6.22542 4.81108Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconCelsius} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.05025 8.05022C4.363 6.73749 6.14348 6 8.00004 6C9.85657 6 11.637 6.73749 12.9498 8.05022C14.2626 9.363 15 11.1434 15 12.9999C15 14.8565 14.2626 16.637 12.9498 17.9497C11.637 19.2624 9.85657 20 8.00004 20C6.14348 20 4.363 19.2624 3.05025 17.9497C1.73749 16.637 1 14.8565 1 12.9999C1 11.1434 1.73749 9.363 3.05025 8.05022ZM8.00004 11.0149C7.47348 11.0149 6.96861 11.224 6.59633 11.5963C6.22406 11.9686 6.01492 12.4735 6.01492 12.9999C6.01492 13.5265 6.22406 14.0314 6.59633 14.4036C6.96861 14.776 7.47348 14.9851 8.00004 14.9851C8.52649 14.9851 9.03136 14.776 9.4036 14.4036C9.77595 14.0314 9.98508 13.5265 9.98508 12.9999C9.98508 12.4735 9.77595 11.9686 9.4036 11.5963C9.03136 11.224 8.52649 11.0149 8.00004 11.0149Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23.7613 7.87225C25.5293 6.0332 27.9272 5 30.4275 5H32.5725C35.0728 5 37.4707 6.0332 39.2388 7.87225C41.0067 9.7114 42 12.2057 42 14.8066C42 16.526 40.66 17.9198 39.0071 17.9198C37.3542 17.9198 36.0143 16.526 36.0143 14.8066C36.0143 13.8571 35.6516 12.9464 35.0061 12.2751C34.3608 11.6036 33.4853 11.2264 32.5725 11.2264H30.4275C29.5147 11.2264 28.6394 11.6036 27.9939 12.2751C27.3484 12.9464 26.9857 13.8571 26.9857 14.8066V28.1934C26.9857 29.1429 27.3484 30.0536 27.9939 30.7249C28.6394 31.3964 29.5147 31.7736 30.4275 31.7736H32.5725C33.4853 31.7736 34.3608 31.3964 35.0061 30.7249C35.6516 30.0536 36.0143 29.1429 36.0143 28.1934C36.0143 26.474 37.3542 25.0802 39.0071 25.0802C40.66 25.0802 42 26.474 42 28.1934C42 30.7943 41.0067 33.2886 39.2388 35.1278C37.4707 36.9668 35.0728 38 32.5725 38H30.4275C27.9272 38 25.5293 36.9668 23.7613 35.1278C21.9933 33.2886 21 30.7943 21 28.1934V14.8066C21 12.2057 21.9933 9.7114 23.7613 7.87225Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconFahrenheit} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.05025 8.05022C4.363 6.73749 6.14348 6 8.00004 6C9.85657 6 11.637 6.73749 12.9498 8.05022C14.2626 9.363 15 11.1434 15 12.9999C15 14.8565 14.2626 16.637 12.9498 17.9497C11.637 19.2624 9.85657 20 8.00004 20C6.14348 20 4.363 19.2624 3.05025 17.9497C1.73749 16.637 1 14.8565 1 12.9999C1 11.1434 1.73749 9.363 3.05025 8.05022ZM8.00004 11.0149C7.47348 11.0149 6.96861 11.224 6.59633 11.5963C6.22406 11.9686 6.01492 12.4735 6.01492 12.9999C6.01492 13.5265 6.22406 14.0314 6.59633 14.4036C6.96861 14.776 7.47348 14.9851 8.00004 14.9851C8.52649 14.9851 9.03136 14.776 9.4036 14.4036C9.77595 14.0314 9.98508 13.5265 9.98508 12.9999C9.98508 12.4735 9.77595 11.9686 9.4036 11.5963C9.03136 11.224 8.52649 11.0149 8.00004 11.0149Z" fill="currentColor"/>
                <path d="M26.1378 5C24.7752 5 23.4684 5.56307 22.5048 6.56532C21.5413 7.56752 21 8.92688 21 10.3444V34.8868C21 36.6062 22.34 38 23.9929 38C25.6458 38 26.9857 36.6062 26.9857 34.8868V24.6132H34.7174C36.3703 24.6132 37.7103 23.2194 37.7103 21.5C37.7103 19.7806 36.3703 18.3868 34.7174 18.3868H26.9857V11.2264H39.0071C40.66 11.2264 42 9.83257 42 8.11321C42 6.39383 40.66 5 39.0071 5H26.1378Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconRestart} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.66634 10.9997C3.66634 10.4934 3.25594 10.083 2.74967 10.083C2.24341 10.083 1.83301 10.4934 1.83301 10.9997C1.83301 13.4308 2.79878 15.7624 4.51786 17.4815C6.23695 19.2006 8.56852 20.1663 10.9997 20.1663L11.0031 20.1663C13.5461 20.1568 15.9869 19.1646 17.8152 17.3972L18.3335 16.8789V19.2501C18.3335 19.7564 18.7439 20.1668 19.2501 20.1668C19.7564 20.1668 20.1668 19.7564 20.1668 19.2501V14.6668C20.1668 14.4125 20.0633 14.1825 19.8961 14.0164C19.7101 13.8314 19.4644 13.7426 19.2212 13.7501H14.6668C14.1605 13.7501 13.7501 14.1605 13.7501 14.6668C13.7501 15.173 14.1605 15.5834 14.6668 15.5834H17.0362L16.5354 16.0842C15.0483 17.5192 13.0646 18.3248 10.998 18.333C9.05366 18.3326 7.18909 17.56 5.81422 16.1851C4.43896 14.8099 3.66634 12.9446 3.66634 10.9997Z" fill="currentColor"/>
                <path d="M18.3337 11.0003C18.3337 11.5066 18.7441 11.917 19.2503 11.917C19.7566 11.917 20.167 11.5066 20.167 11.0003C20.167 8.56917 19.2012 6.2376 17.4821 4.51851C15.7631 2.79943 13.4315 1.83366 11.0003 1.83366L10.9969 1.83366C8.45395 1.84323 6.01307 2.83538 4.18478 4.60284L3.66655 5.12107L3.66655 2.74988C3.66655 2.24362 3.25614 1.83322 2.74988 1.83322C2.24362 1.83322 1.83321 2.24362 1.83321 2.74988L1.83321 7.33322C1.83321 7.58745 1.93671 7.81751 2.10387 7.98356C2.2899 8.16863 2.53558 8.2574 2.77883 8.24988L7.33321 8.24988C7.83947 8.24988 8.24988 7.83948 8.24988 7.33322C8.24988 6.82696 7.83947 6.41655 7.33321 6.41655L4.96379 6.41655L5.46456 5.91578C6.95169 4.48085 8.93536 3.67521 11.002 3.66699C12.9463 3.66744 14.8109 4.44001 16.1858 5.81488C17.561 7.19014 18.3337 9.0554 18.3337 11.0003Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconArrowInCircle} viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1804 24.3931C29.781 23.7925 29.781 22.8076 29.1804 22.207L21.5169 14.5675C20.9324 13.983 19.9875 13.967 19.3869 14.5195L11.8355 22.0468C11.5312 22.3511 11.3791 22.7435 11.3791 23.1439C11.3791 23.5363 11.5312 23.9367 11.8275 24.233C12.4281 24.8336 13.405 24.8416 14.0136 24.233L20.5 17.8427L26.9943 24.4011C27.5949 25.0017 28.5718 25.0017 29.1804 24.3931Z" fill="currentColor"/>
                <path d="M37.1563 20.7656C37.1563 11.5646 29.701 4.10937 20.5 4.10937C11.299 4.10937 3.84375 11.5646 3.84375 20.7656C3.84375 29.9666 11.299 37.4219 20.5 37.4219C29.701 37.4219 37.1563 29.9666 37.1563 20.7656ZM10.5383 30.7273C7.87168 28.0687 6.40625 24.5293 6.40625 20.7656C6.40625 17.002 7.87168 13.4625 10.5383 10.8039C13.1969 8.1373 16.7363 6.67187 20.5 6.67187C24.2637 6.67187 27.8031 8.1373 30.4617 10.8039C33.1283 13.4625 34.5938 17.002 34.5938 20.7656C34.5938 24.5293 33.1283 28.0687 30.4617 30.7273C27.8031 33.3939 24.2637 34.8594 20.5 34.8594C16.7363 34.8594 13.1969 33.3939 10.5383 30.7273Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconCalendar} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.08008 22.3746C2.08008 23.6073 3.08018 24.6074 4.31287 24.6074H20.6866C21.9193 24.6074 22.9194 23.6073 22.9194 22.3746V9.72217H2.08008V22.3746ZM16.9653 13.2574C16.9653 12.9504 17.2165 12.6992 17.5235 12.6992H19.3842C19.6912 12.6992 19.9424 12.9504 19.9424 13.2574V15.1181C19.9424 15.4251 19.6912 15.6763 19.3842 15.6763H17.5235C17.2165 15.6763 16.9653 15.4251 16.9653 15.1181V13.2574ZM16.9653 19.2115C16.9653 18.9045 17.2165 18.6533 17.5235 18.6533H19.3842C19.6912 18.6533 19.9424 18.9045 19.9424 19.2115V21.0722C19.9424 21.3792 19.6912 21.6304 19.3842 21.6304H17.5235C17.2165 21.6304 16.9653 21.3792 16.9653 21.0722V19.2115ZM11.0112 13.2574C11.0112 12.9504 11.2624 12.6992 11.5694 12.6992H13.4301C13.7371 12.6992 13.9883 12.9504 13.9883 13.2574V15.1181C13.9883 15.4251 13.7371 15.6763 13.4301 15.6763H11.5694C11.2624 15.6763 11.0112 15.4251 11.0112 15.1181V13.2574ZM11.0112 19.2115C11.0112 18.9045 11.2624 18.6533 11.5694 18.6533H13.4301C13.7371 18.6533 13.9883 18.9045 13.9883 19.2115V21.0722C13.9883 21.3792 13.7371 21.6304 13.4301 21.6304H11.5694C11.2624 21.6304 11.0112 21.3792 11.0112 21.0722V19.2115ZM5.05713 13.2574C5.05713 12.9504 5.30832 12.6992 5.61533 12.6992H7.47598C7.78299 12.6992 8.03418 12.9504 8.03418 13.2574V15.1181C8.03418 15.4251 7.78299 15.6763 7.47598 15.6763H5.61533C5.30832 15.6763 5.05713 15.4251 5.05713 15.1181V13.2574ZM5.05713 19.2115C5.05713 18.9045 5.30832 18.6533 5.61533 18.6533H7.47598C7.78299 18.6533 8.03418 18.9045 8.03418 19.2115V21.0722C8.03418 21.3792 7.78299 21.6304 7.47598 21.6304H5.61533C5.30832 21.6304 5.05713 21.3792 5.05713 21.0722V19.2115ZM20.6866 3.76807H18.4539V1.53528C18.4539 1.12593 18.1189 0.791016 17.7096 0.791016H16.2211C15.8117 0.791016 15.4768 1.12593 15.4768 1.53528V3.76807H9.52271V1.53528C9.52271 1.12593 9.18779 0.791016 8.77844 0.791016H7.28992C6.88057 0.791016 6.54565 1.12593 6.54565 1.53528V3.76807H4.31287C3.08018 3.76807 2.08008 4.76817 2.08008 6.00085V8.23364H22.9194V6.00085C22.9194 4.76817 21.9193 3.76807 20.6866 3.76807Z" fill="currentColor"/>
            </symbol>
            <symbol id={svgID.iconSun} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9906 2.2793H12.0043V5.25635H13.9906V2.2793ZM19.9958 4.31206L18.2096 6.09829L19.6004 7.48914L21.3867 5.70291L19.9958 4.31206ZM6.00369 4.31206L4.61285 5.70291L6.39908 7.48914L7.78992 6.09829L6.00369 4.31206ZM12.9998 6.74487C9.725 6.74487 7.04565 9.42422 7.04565 12.699C7.04565 15.9737 9.725 18.6531 12.9998 18.6531C16.2745 18.6531 18.9539 15.9737 18.9539 12.699C18.9539 9.42422 16.2745 6.74487 12.9998 6.74487ZM23.4194 11.7082H20.4424V13.6944H23.4194V11.7082ZM5.55713 11.7082H2.58008V13.6944H5.55713V11.7082ZM19.6004 17.9088L18.2096 19.2997L19.9958 21.0859L21.3867 19.695L19.6004 17.9088ZM6.39908 17.9088L4.61285 19.695L6.00369 21.0859L7.78992 19.2997L6.39908 17.9088ZM13.9906 20.1416H12.0043V23.1187H13.9906V20.1416Z" fill="currentColor"/>
            </symbol>
            <svg id={svgID.iconMoon} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9801 2.77539C16.7862 2.77539 18.4831 3.27157 19.9419 4.11506C16.9748 5.83183 14.9801 9.0272 14.9801 12.6989C14.9801 16.3706 16.9748 19.566 19.9419 21.2827C18.4348 22.1584 16.7232 22.6206 14.9801 22.6224C9.50237 22.6224 5.05664 18.1767 5.05664 12.6989C5.05664 7.22112 9.50237 2.77539 14.9801 2.77539Z" fill="currentColor"/>
            </svg>
        </defs>
    </svg>
  )
}

export default MainSVGsprite