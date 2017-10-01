package com.multithreading;

import android.os.AsyncTask;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by aa on 01/10/17.
 */

public class WorkerModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public WorkerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "WorkerModule";
    }

    @ReactMethod
    public void doWork() {
        new AsyncTask<Void, Void, Integer>() {

            @Override
            protected Integer doInBackground(Void... params) {
                int i;
                for (i = 0; i < 10000000; i++) {
                    Log.d("value: ", i + "");
                }
                return i;
            }

            @Override
            protected void onPostExecute(Integer result) {
                Toast.makeText(getReactApplicationContext(), "work done " + result,
                        Toast.LENGTH_SHORT).show();
            }
        }.execute();
    }
}