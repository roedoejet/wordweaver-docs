---
id: firststeps
title: Taking your first steps with WordWeaver
sidebar_label: First Steps
---

Going through your first steps with WordWeaver assumes you've first [installed](ww-installation.md) the necessary requirements.

Each WordWeaver instance will have two main parts, the main _WordWeaver_ API, and the user interface, _WordWeaver-UI_. Each guide will make note of which part it is talking about.

### WordWeaver

In order to run WordWeaver using the stock data, first `cd wordweaver` and then run `docker-compose up`. This will start a docker container with the WordWeaver API backend.

To customize your WordWeaver, please follow the instructions [on configuring your WordWeaver](ww-customization.md).

### WordWeaver-UI

Then, you should be able to go to `localhost/docs` in your browser and look at the documentation for your WordWeaver API.

In order to run the WordWeaver-UI, first `cd wordweaver-UI` and then run `npm start`. This will build the site using the development configuration. You should now be able to go to `localhost:4200` and view your instance of WordWeaver.

To customize your WordWeaver-UI, please follow the instructions [on configuring your WordWeaver-UI](ww-ui-customization.md)