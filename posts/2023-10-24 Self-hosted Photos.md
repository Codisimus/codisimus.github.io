# Self-hosted Photo App
For years, I've enjoyed using Google Photos for my photo and video hosting. While it still meets my needs, it is becoming increasingly expensive. My solution is to host my own Photo gallery to use instead.

## Roadmap
Google Photos has many great features that have kept me a customer for quite a while. I also pay for Onedrive storage, but it has always lacked features when it comes to searching photos. I have a lot of plans for this project but MVP is just a webpage to display photos with some search functionality (which is not much different from what OneDrive offers). To start, I actually plan to utilize OneDrive to back up my photos from my phone. From there, the files can sync to the app server to be viewed/managed.

Once MVP is completed, and I can migrate from Google Photos, I will work to add additional functionality to no longer depend on OneDrive. Following that I will add new features, taking advantage of modern AI technology. The general order of development may be:
1. Backend to load media files
2. Webapp to serve media files
3. Timeline view
4. Deduplication
5. Search functionality
   - file name
   - file type
   - file size
   - date
   - device (phone/camera model)
   - location
   - metadata tags
6. File analytics
7. Albums
8. Auto albums (based on search criteria)
9. Face/person tagging
10. Object tagging
11. Media/album sharing
12. Mobile app
    1. Timeline view
    2. Search functionality
    3. Media backup
    4. Local storage cleanup
13. Similar photo grouping
14. AI editor

## Tech Stack
My favorite programming language for this sort of thing is Python. I've developed some backend functionality surrounding deduplication already using Python. I am currently working on the frontend using Flask.

When it comes to the mobile app, I plan to develop that for Android. I don't have any reason to support iOS at the moment as I'm not really trying to market this tool.

## Updates
I will provide updates on [my website](http://codisimus.com/) and [X](https://twitter.com/Codisimus). Eventually, the project will be on [GitHub](https://github.com/Codisimus) but is too early in development at this time.
