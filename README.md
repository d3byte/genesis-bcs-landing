# genesis-bcs-landing

## Url Decomposition

### No Params

http://localhost:4200/?utm_source=google&utm_medium=cpc&utm_campaign=promo 
    
    No utm_content -> open entry with no competenceLevel

### Passed utm_content & utm_term

http://localhost:4200/?utm_source=google&utm_medium=cpc&utm_campaign=promo&utm_content=about-stocks,how-stocks-work,why-now,no-chance,where-invest,when-income,why-us,new-account&utm_term=newbie
    
    utm_content = about-stocks,how-stocks-work,why-now,no-chance,where-invest,when-income,why-us,new-account – block ids
    utm_term = newbie – competence level

### Passed only utm_term

http://localhost:4200/?utm_source=google&utm_medium=cpc&utm_campaign=promo&utm_term=newbie

    utm_term = newbie – competence level
    show default common blocks for newbies
    
### Passed only utm_content

http://localhost:4200/?utm_source=google&utm_medium=cpc&utm_campaign=promo&utm_term=newbie

    utm_content = about-stocks,how-stocks-work,why-now,no-chance,where-invest,when-income,why-us,new-account – block ids
    show default common blocks for unknown users
