package com.example.junitsetup;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Arrange - create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method to return fake data
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act - inject mock into service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert - check if returned data matches stub
        assertEquals("Mock Data", result);
    }
}
