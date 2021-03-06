import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href='/'>
                <div className={classes['logo-font']}>
                    TheHAUKAI PROJECT
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/stakeholderfeasibilitystudy'>Stakeholder &amp; Feasibility Study</Link>
                    </li>
                    <li>
                        <Link href='/uxusabilityaccessibility'>UX, Usability, Accessibility</Link>
                    </li>
                    <li>
                        <Link href='/modellingprocess'>Modelling Process</Link>
                    </li>
                    <li>
                        <Link href='theresponsivedesigncasestudy'>The Responsive Design Case Study</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
