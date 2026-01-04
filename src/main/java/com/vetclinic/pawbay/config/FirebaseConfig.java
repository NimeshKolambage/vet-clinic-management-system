package com.vetclinic.pawbay.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

import java.io.InputStream;

@Configuration
public class FirebaseConfig {

    @PostConstruct
    public void init() {
        try {

            InputStream serviceAccount =
                    getClass().getClassLoader()
                            .getResourceAsStream(
                                    "firebase/firebase-adminsdk.json"
                            );

            if (serviceAccount == null) {
                throw new RuntimeException(" Firebase key file not found");
            }

            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();

            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);
            }

            System.out.println("🔥 Firebase Initialized Successfully");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

