# Triage Project - Personal Project 
## Application to manage triage in a hospital

### 1. It is planned to create a manager for the triage area of a hospital, which classifies patients by priority and waiting time, so that they are attended in the shortest time. The following endpoints are proposed for the backend: 

##     POST / patient
    a. A patient is registered and assigned a priority (Metadata automatically) 
##     GET /patient 
    b. Get all patients in whitelist ordered by asc createdAt 
##     PUT/ patient
    c. Update the data of a patient registred when the info haved a error.
##     DELETE/ patient
    d. Delete a patient of the whitelist when they have already been treated.

### 2. It is proposed to create a simple U / I from where patients are registered, the list of prioritized patients can be viewed, patient data can be edited info and deleted once they have been treated. The following technologies will be used for the development of the forntend:
      a. React
      b. Emerald UI

### 3.  To assign the priority of a patient, the following items are taken into account:
      
      - 1: Resuscitation
      - 2: Emergency
      - 3: Urgency
      - 4: Minor Urgency
      - 5: No Urgency

### Tech stack: 
    - NodeJS 
    - Mysql 
    - Express
    - Migrations (Sequelize)
    - Test 1 Endpoint (JEST)
    - CI (GitHub)
    - Dockerfile.

