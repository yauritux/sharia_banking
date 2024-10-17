import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
    const loggedIn = {firstName: 'Yauri'};

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting" 
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'} 
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                        accounts={[]} 
                        totalBanks={3}
                        totalCurrentBalance={106100000.57}
                    />
                </header>
            </div>
        </section>
    )
}

export default Home;