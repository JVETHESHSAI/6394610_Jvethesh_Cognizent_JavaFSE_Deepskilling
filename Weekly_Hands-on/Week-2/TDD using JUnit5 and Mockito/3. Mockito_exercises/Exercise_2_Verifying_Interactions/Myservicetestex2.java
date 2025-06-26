package com.example.junitsetup;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class Myservicetestex2 {

    @Test
    public void testVerifyInteraction() {
        // Arrange: mock the dependency
        ExternalApi mockApi = mock(ExternalApi.class);

        // Act: use it in your service
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Assert: verify interaction
        verify(mockApi).getData();
    }
}
